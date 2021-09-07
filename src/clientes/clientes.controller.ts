import { Controller, Get, Param } from '@nestjs/common';
import { ClientesService } from './clientes.service';
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}
  @Get()
  getHello(): string {
    return this.clientesService.getHello();
  }
  @Get('/uno/:id')
  getuno(@Param('id') id: string): string {
    return this.clientesService.getuno(id);
  }
}
