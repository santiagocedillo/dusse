import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/dto/cliente';
@Injectable()
export class ClientesService {
  getHello(): string {
    const cliente = new Cliente();

    return 'dusse muebles modulo Cliente!' + JSON.stringify(cliente);
  }
  getuno(id: string) {
    return `devolver ${id}`;
  }
}
