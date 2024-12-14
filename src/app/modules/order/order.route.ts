import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

// create order
router.post('/', orderController.createOrderIntoDB);

export const OrderRoutes = router;
