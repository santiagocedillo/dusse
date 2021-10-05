export class Decorativo {
  codigo: string;
  description: string;
  //cantidad: number;
  palabrasClave: string[];
  estado: string[];
  ubicacion: string;
  venta: {
    numeroContrato: number[];
    precioVenta: number;
    fechaVenta: Date;
    valorIVA: number;
  };
  compra: {
    numeroFactura: string;
    codigoFactura: string;
    provehedor: string;
    cantidad: number;
    descripcion: string;
    costoCompra: number;
    costoIva: number;
  };
}
