import { monoEnum } from 'mono-utils-core';
import configurationYaml from '../configuration';

const { db, jwt_secret, server_url, client_url } = configurationYaml.call(this);

export const config = {
    DB_HOST: db.postgres.host || 'localhost',
    DB_USERNAME: db.postgres.username || 'postgresdocker',
    DB_PASSWORD: db.postgres.password || '1234567890',
    DB_NAME: db.postgres.name || 'myapp',
    DB_PORT: db.postgres.port || 5432,

    JWT_SECRET_KEY: jwt_secret || 'this is secret',
    CLIENT_URL: (server_url || 'http://localhost:3000').split(','),
    SERVER_URL: client_url || 'http://localhost:4000',

    PORT: Number(process.env.PORT) || 4000,
    NODE_ENV: process.env.NODE_ENV || monoEnum.NODE_ENV_MODE.DEVELOPMENT,
    DEBUG: process.env.DEBUG || '',
};
