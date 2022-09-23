import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './core';
import { Users } from './models';

export const DbModule = TypeOrmModule.forRoot({
    type: 'postgres',
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    // synchronize: true,
    keepConnectionAlive: true,
    entities: [Users],
    extra: { connectionLimit: 1 },
});
