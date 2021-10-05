import { ClienteDto } from './cliente';
import { Mueble } from './mueble';

export class Contrato {
  cliente: ClienteDto;
  detalle: Mueble[];
  subValor: number;
  descuento: number;
  valorTotal: number;
  imagenesUrls: string[];
}
