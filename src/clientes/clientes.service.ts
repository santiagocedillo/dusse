import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClienteDto } from '../dto/cliente';

import { Cliente, ClienteDocument } from '../exquemas/cliente.schema';
@Injectable()
export class ClientesService {
  [x: string]: any;
  logger: Logger;
  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>,
  ) {
    this.logger = new Logger();
  }
  //saludo para prueba
  getHello(): string {
    return 'dusse muebles modulo Cliente!';
  }
  async deleteCliente(cedulaBorrar: string): Promise<any> {
    this.logger.log(`se borrarar ${cedulaBorrar}`);
    const a = await this.clienteModel
      .findOneAndDelete({ cedula: cedulaBorrar })
      .exec();
    this.logger.debug(a);
    return a;
    //return this.clienteModel.findByIdAndDelete({ cedula: cedulaBorrar }).exec();
  }
  //encuentra un cliente por cedula
  async getuno(cedulaBuscar: string): Promise<Cliente> {
    return this.clienteModel.findOne({ cedula: cedulaBuscar }).exec();
  }
  //inserta cliente
  async nuevoClienteService(aCrear: ClienteDto): Promise<Cliente> {
    const banderaExiste: Cliente = await this.getuno(aCrear.cedula);
    this.logger.debug(JSON.stringify(banderaExiste));
    if (banderaExiste != null) {
      this.logger.log('Cliente no se crea ya existe');
      return banderaExiste;
    } else {
      const created = new this.clienteModel(aCrear);
      this.logger.log('se crea nuevo registro');
      return created.save();
    }
  }
  // encuentra todos los clientes
  async findAll(): Promise<Cliente[]> {
    const lista = await this.clienteModel.find().exec();
    this.logger.debug(lista);
    return lista;
  }
}
