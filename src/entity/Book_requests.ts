import {Entity, PrimaryGeneratedColumn, Column,ManyToOne, PrimaryColumn} from "typeorm";

@Entity()
export class Book_request {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    book_name!: string;

}
