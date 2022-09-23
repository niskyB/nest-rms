import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import * as joi from 'joi';

@Entity()
export class Projects {
    @ApiProperty({ description: 'Id' })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty({ description: 'Name' })
    @Column({ nullable: false, length: 50 })
    name: string;

    @ApiProperty({ description: 'Created at' })
    created_at: number;

    @ApiProperty({ description: 'Created at' })
    updated_at: number;

    @ApiProperty({ description: 'Is deleted' })
    @Column({ default: false })
    is_deleted: boolean;
}

export const userValidateSchema = {
    name: joi.string().min(5).max(40).trim().lowercase().required(),
    uuid: joi.string().uuid().required(),
};
