import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import * as joi from 'joi';

@Entity()
export class Users {
    @ApiProperty({ description: 'Id' })
    @PrimaryGeneratedColumn('increment')
    id: string;

    @ApiProperty({ description: 'Name' })
    @Column({ length: 50, nullable: false })
    name: string;

    @ApiProperty({ description: 'Uuid' })
    @Column({ nullable: false })
    uuid: string;

    @ApiProperty({ description: 'Created at' })
    @Column({ nullable: false })
    created_at: Date;

    @ApiProperty({ description: 'Created at' })
    @Column({ nullable: false })
    updated_at: Date;

    @ApiProperty({ description: 'Is deleted' })
    @Column({ default: false })
    is_deleted: boolean;
}

export const userValidateSchema = {
    name: joi.string().min(5).max(40).trim().lowercase().required(),
    uuid: joi.string().uuid().required(),
};
