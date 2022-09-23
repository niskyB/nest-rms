import * as joi from 'joi';
import { ApiProperty } from '@nestjs/swagger';
import { userValidateSchema } from '../../models';
export class UsersCreatRequestPayload {
    @ApiProperty({ description: 'Name', example: 'loc nguyen' })
    name: string;

    @ApiProperty({ description: 'Uuid', example: '653b11b0-3b14-11ed-a261-0242ac120002' })
    uuid: string;
}

export const vUsersCreatRequestPayload = joi.object<UsersCreatRequestPayload>({
    name: userValidateSchema.name,
    uuid: userValidateSchema.uuid,
});
