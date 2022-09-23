import { monoEnum } from 'mono-utils-core';
import configurationYaml from '../configuration';

export const config = {
    DB_HOST: configurationYaml.call(this).db.postgres.host || 'localhost',
    DB_USERNAME: configurationYaml.call(this).db.postgres.username || 'postgresdocker',
    DB_PASSWORD: configurationYaml.call(this).db.postgres.password || '1234567890',
    DB_NAME: configurationYaml.call(this).db.postgres.name || 'myapp',
    DB_PORT: configurationYaml.call(this).db.postgres.port || 5432,

    JWT_SECRET_KEY: configurationYaml.call(this).jwt_secret || 'this is secret',
    CLIENT_URL: (configurationYaml.call(this).server_url || 'http://localhost:3000').split(','),
    SERVER_URL: configurationYaml.call(this).client_url || 'http://localhost:4000',

    PORT: Number(process.env.PORT) || 4000,
    NODE_ENV: process.env.NODE_ENV || monoEnum.NODE_ENV_MODE.DEVELOPMENT,
    DEBUG: process.env.DEBUG || '',
};
