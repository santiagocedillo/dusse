import { Controller, Get } from '@nestjs/common';
import { ClientesService } from './clientes.service';
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}
  @Get()
  getHello(): string {
    return this.clientesService.getHello();
  }
}
