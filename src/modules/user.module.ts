import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repositories';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { Connection } from 'typeorm';
import { Users } from '../models';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    controllers: [UserController],
    providers: [UserService, { provide: UserRepository, useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository), inject: [Connection] }],
    exports: [UserService, UserRepository],
})
export class UserModule {}
