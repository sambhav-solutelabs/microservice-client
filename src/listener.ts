import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.QUEUE_URL],
      queue: 'product_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.listen(() => {
    Logger.log('Microservice is running');
  });
}
bootstrap();
