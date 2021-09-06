export class Mueble {
  numeroSerie: string;
  mueble: string;
  modelo: string;
  detalle: {
    descripcion: string;
    madera: string[];
    tapiz: [];
  };
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
}
