import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Payment extends Document {
  @Prop()
  id: String;
  @Prop()
  status: Boolean;
  @Prop()
  userId: String;
  @Prop()
  merchantId: String;
  @Prop()
  outletId: String;
  @Prop()
  orderId: String;
  @Prop()
  createdAt: String;
  @Prop()
  updatedAt: String;
  @Prop()
  deletedAt: String;
  @Prop()
  total: Number;
  @Prop()
  discount: Number;
  @Prop()
  waived: Boolean;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
