import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

// create order
const createOrder = async (data: TOrder) => {
  const result = await OrderModel.create(data);
  return result;
};

export const orderServices = {
  createOrder,
};
