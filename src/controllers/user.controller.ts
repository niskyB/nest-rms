import { ErrorMessageDetailEnum } from './../core/enum/error.enum';
import { Body, Controller, Get, HttpException, Param, Post, Res, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { JoiValidatorPipe } from '../pipes';
import { UsersCreatRequestPayload, vUsersCreatRequestPayload } from '../payload/request';
import { UserService } from '../services/user.service';
import { apiResponse } from '../exception/interface';
import { ErrorMessageEnum } from '../core';
import { Users } from '../models';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/:userId')
    async cGetOneById(@Param('userId') userId: string, @Res() res: Response) {
        let user: Users;
        try {
            user = await this.userService.findOne('id', userId);
        } catch (err) {
            throw new HttpException(apiResponse.send(ErrorMessageEnum.INTERNAL_SERVER_ERROR, ErrorMessageDetailEnum.INTERNAL_SERVER_ERROR_DESCRIPTION), StatusCodes.INTERNAL_SERVER_ERROR);
        }
        if (!user) throw new HttpException(apiResponse.send(ErrorMessageEnum.NO_CONTENT, ErrorMessageDetailEnum.NO_CONTENT_DESCRIPTION), StatusCodes.NO_CONTENT);
        return res.send(user);
    }

    @Post('/')
    @UsePipes(new JoiValidatorPipe(vUsersCreatRequestPayload))
    async cCreateUser(@Body() body: UsersCreatRequestPayload, @Res() res: Response) {
        try {
            await this.userService.createUser(body.name, body.uuid);
        } catch (error) {
            throw new HttpException(apiResponse.send(ErrorMessageEnum.INTERNAL_SERVER_ERROR, ErrorMessageDetailEnum.INTERNAL_SERVER_ERROR_DESCRIPTION), StatusCodes.INTERNAL_SERVER_ERROR);
        }
        return res.status(201).send();
    }
}
