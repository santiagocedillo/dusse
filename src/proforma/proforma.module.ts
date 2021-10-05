import { Module } from '@nestjs/common';
import { ClientesModule } from 'src/clientes/clientes.module';
import { ProformaController } from './proforma.controller';
import { ProformaService } from './proforma.service';

@Module({
  imports: [ClientesModule],
  controllers: [ProformaController],
  providers: [ProformaService],
})
export class ProformaModule {}
