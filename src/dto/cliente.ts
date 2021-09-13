export class ClienteDto {
  cedula: string;
  nombre: string;
  telefono: string[];
  direccion: string;
  email: string[];
  vip = false;
  imagenUrl: string;
  constructor({ cedula, nombre, telefono, direccion, email, vip = true }) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
    this.email = email;
    this.vip = vip;
  }
}
