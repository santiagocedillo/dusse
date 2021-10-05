import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { type } from 'os';
import { Cliente } from 'src/clientes/exquemas/cliente.schema';
export type ProformaDocument = Proforma & Document;
@Schema()
export class Proforma {
  @Prop({ required: true, trim: true })
  proformaNumero: number;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
  })
  cliente: Cliente;
  @Prop({ type: Date, default: Date.now })
  creadoFecha: Date;
  @Prop(
    raw({
      codigo: { type: String },
      linea: { type: String, uppercase: true },
      mueble: { type: String, uppercase: true },
      detalle: { type: String },
      cantidad: { type: Number },
      valorUnitario: { type: Number },
    }),
  )
  producto: Record<string, any>;
  @Prop()
  subTotal: number;
  @Prop()
  descuento: number;
  @Prop()
  ivaPorCiento: number;
  @Prop()
  ivaValor: number;
}
export const ProformaSchema = SchemaFactory.createForClass(Proforma);
