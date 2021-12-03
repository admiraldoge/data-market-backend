import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelist = [
    'http://localhost:3000',
    'http://143.110.239.224:3000',
    'http://localhost:8080',
  ];
  const config = new DocumentBuilder()
    .setTitle('Data Market')
    .setDescription('This is the documentation for Data Market APIs')
    .setVersion('0.1')
    .addTag('data')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  app.enableCors({
    origin: function (origin, callback) {
      console.log('Allowed origin: ',origin);
      if (!origin || whitelist.indexOf(origin) !== -1) {
        console.log('Allowed origin: ',origin);
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
