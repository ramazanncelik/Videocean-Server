import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // İzin verilen kaynak (origin)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // İzin verilen HTTP metodları
    allowedHeaders: ['Content-Type', 'Authorization'], // İzin verilen başlıklar
  };

  app.enableCors(corsOptions);
  await app.listen(port);
}
bootstrap();
