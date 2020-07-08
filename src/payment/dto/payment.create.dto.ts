import { IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  id: String;
  status: Boolean;
  userId: String;
  @IsNotEmpty()
  merchantId: String;
  @IsNotEmpty()
  outletId: String;
  orderId: String;
  createdAt: String;
  updatedAt: String;
  deletedAt: String;
  total: Number;
  discount: Number;
  waived: Boolean;
}
