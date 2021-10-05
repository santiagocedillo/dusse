import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlDb } from './configApp/configUrlDb';
import { MueblesModule } from './muebles/muebles.module';
import { ProformaModule } from './proforma/proforma.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ClientesModule } from './clientes/clientes.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //   validationSchema: Joi.object({
      //     APP_PORT: Joi.number().default(3000),
      //     DB_NAME: Joi.string().default('TEMP'),
      //     DB_PORT: Joi.number().default(27017),
      //     DB_HOST: Joi.string().default('localhost'),
      //   }),
      //   validationOptions: {
      //     allowUnknown: false,
      //     abortEarly: true,
      //   },
    }),
    ClientesModule,
    MongooseModule.forRoot(UrlDb()),
    MueblesModule,
    ProformaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'publico'), // <-- path to the static files
      exclude: ['estatico'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
