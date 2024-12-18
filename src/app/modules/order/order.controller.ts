import { Request, Response } from 'express';
import { orderServices } from './order.service';

// create order into DB
const createOrderIntoDB = async (req: Request, res: Response) => {
  const order = req.body;

  try {
    const result = await orderServices.createOrder(order);
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      message: 'Something went wrong',
      status: false,
      error,
    });
  }
};
// calculate revenue
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.calculateRevenueFromOrder();
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      message: 'Something went wrong',
      status: false,
      error,
    });
  }
};

export const orderController = {
  createOrderIntoDB,
  calculateRevenue,
};
