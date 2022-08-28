import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Main (main.ts)');
  const app = await NestFactory.create(AppModule);
  const configs = app.get(ConfigService);

  const PORT = configs.get('app.port');
  app.enableCors({
    origin: [
      `http://localhost:${PORT}`,
      new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${PORT}$/`),
    ],
  });

  await app.listen(PORT);
  logger.log(`Server running on port ${PORT}`);
}
bootstrap();
