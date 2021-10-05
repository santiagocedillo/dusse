import { Injectable } from '@nestjs/common';
import { ClientesService } from 'src/clientes/clientes.service';

@Injectable()
export class ProformaService {
  constructor(private readonly clientesService: ClientesService) {}
  findAll() {
    return `todo bien desde el servicio proformas`;
  }
}
