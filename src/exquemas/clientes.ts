import mongoose from 'mongoose';
import { ClienteDto } from '../dto/cliente';
const Schema = mongoose.Schema;
const clienteSchema = new Schema(
  {
    cliente: ClienteDto,
  },
  { timestamps: true },
);
module.exports = mongoose.model('Cliente', clienteSchema);
