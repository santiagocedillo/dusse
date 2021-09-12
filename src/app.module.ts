import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlDb } from './configApp/configUrlDb';

@Module({
  imports: [ClientesModule, MongooseModule.forRoot(UrlDb())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
