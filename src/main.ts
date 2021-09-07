import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { ConnectDb } from './db/mongodb';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //coneccion a mongoose
  try {
    const db = {
      dbName: process.env.DB_NAME,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
    };

    await ConnectDb(db);
  } catch (e) {
    console.log(`error= ${e}`);
  }
  //autodocumentacion con SwaggerModule
  const config = new DocumentBuilder()
    .setTitle('DUSSÊ api')
    .setDescription('puntos expuestos por api')
    .setVersion('1.0')
    .addTag('DUSSÊ')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log(`puerto de api ${process.env.APP_PORT}`);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
