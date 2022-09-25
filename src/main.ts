import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { monoLogger } from 'mono-utils-core';
import { config, AppConstant, router } from './core';
import { CustomLoggerService } from './services';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { logger: new CustomLoggerService() });

    router(app);

    await app.listen(config.PORT, () => {
        monoLogger.log(AppConstant.APP_INFO, `Current Mode: ${config.NODE_ENV}`);
        monoLogger.log(AppConstant.APP_INFO, `Listening on port ${config.PORT}`);
        monoLogger.log(AppConstant.APP_INFO, `Ready to service`);
    });
}

monoLogger.log(AppConstant.APP_INFO, `---------------Configuration--------------------`);
monoLogger.log(AppConstant.APP_INFO, config);
monoLogger.log(AppConstant.APP_INFO, `-----------------------------------`);

bootstrap();
