import { PrismaClient, User, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

class UserService {
    private db = new PrismaClient();
    private saltRounds = 8;

    exclude<User, Key extends keyof User>(user: User, keys: Key[]): Omit<User, Key> {
        const omitedUser = { ...user };
        for (let key of keys) {
            delete omitedUser[key];
        }
        return omitedUser;
    }

    excludeMany<User, Key extends keyof User>(users: User[], keys: Key[]): Omit<User, Key>[] {
        const omitedUsers = users.map((user) => this.exclude(user, keys));
        return omitedUsers;
    }

    async getAll(): Promise<User[]> {
        return this.db.user.findMany();
    }

    async getById(id: number): Promise<User | null> {
        return this.db.user.findUnique({
            where: {
                id,
            },
        });
    }

    async create(userData: Prisma.UserUncheckedCreateInput): Promise<User> {
        const { password } = userData;

        if (password) {
            const hashedPassword = await this.hashPassword(password);
            userData.password = hashedPassword;

            return this.db.user.create({
                data: userData,
            });
        } else throw new Error("Password field was not provided");
    }

    async update(id: number, userData: Prisma.UserUncheckedUpdateInput): Promise<User> {
        const { password } = userData;
        if (typeof password === "string") {
            const hashedPassword = await this.hashPassword(password);
            userData.password = hashedPassword;
        }

        return this.db.user.update({
            where: {
                id,
            },
            data: userData,
        });
    }

    async delete(id: number): Promise<User> {
        return this.db.user.delete({
            where: {
                id,
            },
        });
    }

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    async comparePassword(id: number, password: string): Promise<boolean> {
        const user = await this.getById(id);
        if (user) {
            return bcrypt.compare(password, user.password);
        } else return false;
    }
}

export default UserService;
