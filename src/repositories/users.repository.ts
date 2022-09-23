import { EntityRepository } from 'typeorm';
import { Users } from '../models';
import { RepositoryService } from './repository';

@EntityRepository(Users)
export class UserRepository extends RepositoryService<Users> {}
