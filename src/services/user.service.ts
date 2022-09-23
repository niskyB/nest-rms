import { Injectable } from '@nestjs/common';
import { Users } from '../models';
import { UserRepository } from '../repositories';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async updateOne(user: Users): Promise<Users> {
        user.created_at = new Date();
        return await this.userRepository.save(user);
    }

    async findOne(field: keyof Users, value: any): Promise<Users> {
        return await this.userRepository.findOneByField(field, value);
    }

    async createUser(name: string, uuid: string): Promise<Users> {
        const user = new Users();
        user.name = name;
        user.uuid = uuid;
        user.created_at = new Date();
        user.updated_at = new Date();
        return await this.userRepository.save(user);
    }
}
