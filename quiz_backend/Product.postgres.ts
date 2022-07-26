import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    number!: number

    @Column({ type: "text" })
    product!: string

    @Column({ type: "text" })
    price!: number

    @Column({ type: "text" })
    contents!: string
}