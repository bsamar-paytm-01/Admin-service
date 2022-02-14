import {Entity, PrimaryGeneratedColumn, Column,ManyToOne, PrimaryColumn} from "typeorm";

@Entity()
export class User_status {

    @PrimaryColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    phoneNumber!: string;

    @Column()
    role!: string;

    @Column()
    status!: number;

}
