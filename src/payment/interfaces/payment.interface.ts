export interface Payment {
  id: String;
  status: String;
  userId: String;
  merchantId: String;
  outletId: String;
  orderId: String;
  createdAt: String;
  updatedAt: String;
  deletedAt: String;
  total: Number;
  discount: Number;
  waived: Boolean;
}
