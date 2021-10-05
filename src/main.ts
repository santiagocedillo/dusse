import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configSwagger = new DocumentBuilder()
    .setTitle('DUSSÊ api')
    .setDescription('puntos expuestos por api')
    .setVersion('1.0')
    .addTag('DUSSÊ')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);
  const configService = app.get(ConfigService);
  const app_port = configService.get('APP_PORT');
  await app.listen(app_port);
}
bootstrap();
