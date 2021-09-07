export class Cliente {
  cedula: string;
  nombre: string;
  telefono: string[];
  direccion: string;
  email: string[];
  vip = false;
  imagenUrl: string;
  constructor() {
    this.cedula = '0704254085';
    this.nombre = 'Lina Garza';
    this.telefono = ['0997022866', '0997892838'];
    this.direccion = 'osmara de leon';
    this.email = ['barbieanges@hotmail.com', 'linadelosangeles@gmail.com'];
    this.vip = true;
  }
}
