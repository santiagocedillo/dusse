import { MuebleCatalogo } from './muebleCatalogo';

export class Mueble {
  numeroSerie: string;
  detalle: {
    descripcion: string;
    madera: string[];
    tapiz: [];
  };
  muebleCatalogo: MuebleCatalogo;
  contrato: {
    numeroContrato: number;
    valorVenta: number;
    fechaVenta: Date;
    fechaEntrega: Date;
  };
  produccion: {
    numeroOrden: number;
    costoCompra: number;
    fechaOrden: Date;
    fechaEntrega: Date;
  };
  imagenesUrls: string[];
}
