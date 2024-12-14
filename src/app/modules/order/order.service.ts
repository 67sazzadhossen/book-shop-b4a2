import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

// create order
const createOrder = async (data: TOrder) => {
  const result = await OrderModel.create(data);
  return result;
};

// calculate revenue
const calculateRevenueFromOrder = async () => {
  const result = await OrderModel.aggregate([
    {
      $addFields: {
        revenue: { $multiply: ['$quantity', '$totalPrice'] },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$revenue' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return result;
};

export const orderServices = {
  createOrder,
  calculateRevenueFromOrder,
};
