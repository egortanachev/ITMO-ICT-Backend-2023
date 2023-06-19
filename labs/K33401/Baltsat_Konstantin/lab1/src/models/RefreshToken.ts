import { Entity, PrimaryColumn, OneToOne } from "typeorm"
import { User } from "./User";

@Entity("refresh_token")
export class RefreshToken {
    @PrimaryColumn()
    token: string

    @OneToOne(() => User, {
        cascade: true,
        onDelete: "SET NULL"
    })
    user: User
}

// TODO: add JWT with this token