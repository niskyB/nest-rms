import { Module } from '@nestjs/common';
import { DbModule } from './module.config';
import { UserModule } from './modules/user.module';

@Module({
    imports: [DbModule, UserModule],
})
export class AppModule {}
