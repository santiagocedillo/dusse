import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlDb } from './configApp/configUrlDb';
import { MueblesModule } from './muebles/muebles.module';
import { ProformaModule } from './proforma/proforma.module';

@Module({
  imports: [ClientesModule, MongooseModule.forRoot(UrlDb()), MueblesModule, ProformaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
