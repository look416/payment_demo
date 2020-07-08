import {
  Controller,
  Get,
  Req,
  Post,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { CreatePaymentDto } from './dto/payment.create.dto';
import { PaymentService } from './payment.service';
// import { Order } from './interfaces/order.interface';
import { JwtAuthGuard } from 'src/auth/guard/jwt.auth.guard';
import { Payment } from './schema/payment.schema';
import { User } from 'src/users/users.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('payments')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: Request): Promise<Payment[]> {
    return this.paymentService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id): Promise<Payment> {
    return this.paymentService.find(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() body: CreatePaymentDto,
    @Req() req: Request,
  ): Promise<Payment> {
    let user: User = req.user;
    body.userId = user.userId;
    return this.paymentService.create(body);
  }

  @EventPattern('payment')
  async createEvent(data: CreatePaymentDto): Promise<Payment> {
    return this.paymentService.create(data)
  }
}
