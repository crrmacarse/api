import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'constants/base.entity';

@Entity()
export class Accounts extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 30,
    })
    username: string;

    @Column({
        type: 'varchar',
        nullable: false,
        select: false,
    })
    password: string;

    @Column({
        type: 'varchar',
        name: 'google_token',
        nullable: false,
        select: false,
    })
    googleToken: string;
}