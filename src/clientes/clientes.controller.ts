import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ClienteDto } from 'src/dto/cliente';
import { Cliente } from 'src/exquemas/cliente.schema';
import { ClientesService } from './clientes.service';
@Controller('clientes')
export class ClientesController {
  logger: Logger;
  constructor(private readonly clientesService: ClientesService) {
    this.logger = new Logger();
  }
  @Get('todos')
  getHello(): string {
    return this.clientesService.getHello();
  }
  //ruta para consultar uno cliente por cedula
  @Get('/:cedula')
  async getuno(@Param('cedula') cedula: string): Promise<Cliente> {
    return this.clientesService.getuno(cedula);
  }
  @Delete('/borrar/:cedula')
  async deleteCliente(@Param('cedula') cedulaBorrar: string, @Res() res) {
    const retorno = await this.clientesService.deleteCliente(cedulaBorrar);
    !retorno
      ? res.status('404').send({ error: 'no encontrado' })
      : res.status('200').send(retorno);
  }
  //ruta para crear un nuevo cliente
  @Post('/nuevo')
  async postNuevoCliente(@Body() nuevoCliente: ClienteDto): Promise<any> {
    return this.clientesService.nuevoClienteService(nuevoCliente);
  }
  //ruta para consultar todos los clientes
  @Get()
  async findAll(): Promise<Cliente[]> {
    this.logger.debug(`controlador todos`);
    return this.clientesService.findAll();
  }
}
