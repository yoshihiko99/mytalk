import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as listEndpoints from 'express-list-endpoints';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ forbidNonWhitelisted: true })); // for class-validator
  await app.listen(3000);

  const server = app.getHttpServer();
  const router = server._events.request._router;
  console.log(listEndpoints(router));
}
bootstrap();
