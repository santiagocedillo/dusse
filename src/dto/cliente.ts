import { ApiProperty } from '@nestjs/swagger';

export class ClienteDto {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  cedula: string;
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  telefono: string[];
  @ApiProperty()
  direccion: string;
  @ApiProperty()
  email: string[];
  @ApiProperty()
  vip: boolean;
  @ApiProperty()
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
