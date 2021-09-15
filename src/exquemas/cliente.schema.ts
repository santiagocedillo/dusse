import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ClienteDocument = Cliente & Document;
@Schema()
export class Cliente {
  @Prop({ required: true, trim: true })
  cedula: string;
  @Prop({ trim: true })
  nombre: string;
  @Prop({ trim: true })
  telefono: string[];
  @Prop({ trim: true })
  direccion: string;
  @Prop({ trim: true })
  email: string[];
  @Prop({ default: false })
  vip: boolean;
  @Prop({ trim: true })
  imagenUrl: string;
}
export const ClienteSchema = SchemaFactory.createForClass(Cliente);
