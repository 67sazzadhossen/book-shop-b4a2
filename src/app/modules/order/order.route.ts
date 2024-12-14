import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

// create order
router.post('/', orderController.createOrderIntoDB);

// calculate revenue
router.get('/revenue', orderController.calculateRevenue);

export const OrderRoutes = router;
