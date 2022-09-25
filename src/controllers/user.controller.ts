import { Body, Controller, Get, HttpException, Param, Post, Res, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { JoiValidatorPipe } from '../pipes';
import { UsersCreatRequestPayload, vUsersCreatRequestPayload } from '../payload/request';
import { UserService } from '../services/user.service';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/:userId')
    async cGetOneById(@Param('userId') userId: string, @Res() res: Response) {
        const user = await this.userService.findOne('id', userId);
        if (!user) throw new HttpException({ errorMessage: 'error.not_found' }, StatusCodes.NOT_FOUND);
        return res.send(user);
    }

    @Post('/')
    @UsePipes(new JoiValidatorPipe(vUsersCreatRequestPayload))
    async cCreateUser(@Body() body: UsersCreatRequestPayload, @Res() res: Response) {
        const nUser = await this.userService.createUser(body.name, body.uuid);
        if (!nUser) throw new HttpException({ errorMessage: 'error.create_user' }, StatusCodes.INTERNAL_SERVER_ERROR);
        return res.status(201).send();
    }
}
