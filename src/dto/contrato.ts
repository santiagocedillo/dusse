import { Cliente } from './cliente';
import { Mueble } from './mueble';

export class Contrato {
  cliente: Cliente;
  detalle: Mueble[];
  subValor: number;
  descuento: number;
  valorTotal: number;
  imagenesUrls: string[];
}
