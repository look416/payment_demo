import { Injectable } from '@nestjs/common';
// import { Order } from './interfaces/order.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from './schema/payment.schema';
import { Model } from 'mongoose';
import { CreatePaymentDto } from './dto/payment.create.dto';
import { DateTime } from 'luxon';
import { generate } from 'shortid';
import {Random} from 'random-js';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  async create(payment: CreatePaymentDto): Promise<Payment> {
    const random = new Random()
    payment.id = generate();
    payment.status = random.bool();
    payment.createdAt = DateTime.local().toSQL();
    payment.updatedAt = DateTime.local().toSQL();
    payment.waived = false;

    const createdPayment = new this.paymentModel(payment);
    return createdPayment.save();
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentModel.find().exec();
  }

  async find(id: String): Promise<Payment> {
    return this.paymentModel.findOne({
      id,
    }).exec();
  }
}
