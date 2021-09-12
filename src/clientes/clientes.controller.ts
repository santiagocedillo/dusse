import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClienteDto } from 'src/dto/cliente';
import { Cliente } from 'src/exquemas/cliente.schema';
import { ClientesService } from './clientes.service';
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}
  @Get()
  getHello(): string {
    return this.clientesService.getHello();
  }
  //ruta para consultar uno cliente por cedula
  @Get('/:cedula')
  async getuno(@Param('cedula') cedula: string): Promise<Cliente> {
    return this.clientesService.getuno(cedula);
  }
  //ruta para crear un nuevo cliente
  @Post('/nuevo')
  async postNuevoCliente(@Body() nuevoCliente: ClienteDto): Promise<any> {
    return this.clientesService.nuevoClienteService(nuevoCliente);
  }
  //ruta para consultar todos los clientes
  @Get('todos')
  async findAll(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }
}
