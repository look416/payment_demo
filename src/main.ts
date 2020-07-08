import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
config();
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';



async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: process.env.redis_url,
      password: process.env.redis_secret
    }
  });
  await app.listen(() => {});
}
bootstrap();
