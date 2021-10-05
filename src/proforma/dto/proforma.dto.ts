import { ApiProperty } from '@nestjs/swagger';
import { ClienteDto } from 'src/clientes/dto/cliente';

export class ProformaDto {
  @ApiProperty()
  proformaNumero: number;
  @ApiProperty()
  cliente: ClienteDto;
  @ApiProperty()
  creadoFecha: Date;
  @ApiProperty()
  producto: [
    {
      codigo: string;
      linea: string;
      mueble: string;
      detalle: string;
      cantidad: number;
      valorUnitario: number;
    },
  ];
  @ApiProperty()
  subTotal: number;
  @ApiProperty()
  descuento: number;
  @ApiProperty()
  ivaPorCiento: number;
  @ApiProperty()
  ivaValor: number;
}
