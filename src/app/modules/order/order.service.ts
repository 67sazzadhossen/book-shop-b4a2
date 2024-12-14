import { BookServices } from '../product/product.service';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

// create order
const createOrder = async (data: TOrder) => {
  const { product: productId, quantity } = data;

  const isProductExists = await BookServices.getSingleBookFromDB(
    productId.toString(),
  );

  if (!isProductExists) {
    throw new Error('Product not found');
  }

  if (quantity > isProductExists.quantity) {
    throw new Error('Out of stock');
  }

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
