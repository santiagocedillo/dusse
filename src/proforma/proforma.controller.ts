import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProformaDto } from './dto/proforma.dto';
import { ProformaService } from './proforma.service';

@Controller('proforma')
export class ProformaController {
  logger: Logger;
  constructor(private readonly proformaService: ProformaService) {
    this.logger = new Logger();
  }
  @Get()
  async findAll(): Promise<any> {
    this.logger.debug('devuelve todas las proformas');
    return this.proformaService.findAll();
  }
  @Get('id/:id')
  async findOneById(@Param('id') id: string): Promise<any> {
    this.logger.debug(`devuelve la proforma con id ${id}`);
    return `"id":"${id}"`;
  }
  @Get('/numero/:nProforma')
  async findOneByNumber(@Param('nProforma') nProforma: string): Promise<any> {
    this.logger.debug(`devuelve la proforma con el numero ${nProforma}`);
    return `"numeroProforma":"${nProforma}"`;
  }
  @Get('/nombre/:nombre')
  async findByNombre(@Param('nombre') nombre: string): Promise<any> {
    this.logger.debug(`devuelve las proformas por nombre ${nombre}`);
    return `"nombre":"${nombre}"`;
  }
  @Post('/nueva')
  async crearProforma(
    @Body('proformaDto') proformaDto: ProformaDto,
  ): Promise<ProformaDto> {
    this.logger.debug(`crea una nueva proforma ${JSON.stringify(proformaDto)}`);
    return proformaDto;
  }
  @Put('/modificar/:id')
  async updateById(@Param('id') id: string) {
    this.logger.debug(`actualiza proforma por id ${id}`);
    return `"profomar":"${id}"`;
  }
  @Delete('/borrar/:id')
  async deleteById(@Param('id') id: string): Promise<any> {
    this.logger.debug(`borra logicamente proforma por id ${id}`);
    return `"profomar":"${id}"`;
  }
}
