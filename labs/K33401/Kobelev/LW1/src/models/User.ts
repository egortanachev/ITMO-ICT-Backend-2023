import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm'
import * as bcrypt from 'bcryptjs'
import { RandomEntity } from './RandomEntity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @Column()
    tokenVersion: number

    @ManyToMany(() => RandomEntity, {
        cascade: true,
    })
    @JoinTable()
    randomEntities: RandomEntity[]

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password)
    }
}
