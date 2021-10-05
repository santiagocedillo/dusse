import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClienteDto } from './dto/cliente';
import { ValidarCedula } from './validaciones/validacionCedula';

import { Cliente, ClienteDocument } from './exquemas/cliente.schema';
@Injectable()
export class ClientesService {
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
    this.logger.log(`se borrarar cedula ${cedulaBorrar}`);
    const a = await this.clienteModel
      .findOneAndDelete({ cedula: cedulaBorrar })
      .exec();
    this.logger.debug(a);
    return a;
  }
  async deleteId(idBorrar: string): Promise<any> {
    this.logger.log(`se borrarar id ${idBorrar}`);

    const a = await this.clienteModel.findByIdAndDelete(idBorrar).exec();
    this.logger.debug(JSON.stringify(a));
    return a;
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
  async validateCedula(cedulaAValidar: string): Promise<string> {
    const valida = ValidarCedula(cedulaAValidar);
    if (valida) return '{ok}';
    else return '{error formato}';
  }
  async actualizarCliente(nuevosDatos: ClienteDto): Promise<Cliente> {
    const respuersta = this.clienteModel.findById(nuevosDatos._id);
    this.logger.debug(JSON.stringify(respuersta));
    this.logger.debug(JSON.stringify(nuevosDatos));
    return this.clienteModel.replaceOne({ _id: nuevosDatos._id }, nuevosDatos);
  }
}
