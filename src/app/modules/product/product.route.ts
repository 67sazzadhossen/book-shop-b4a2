import express from 'express';
import { bookControllers } from './product.controller';

const router = express.Router();

router.post('/', bookControllers.createBook);

export const BookRoutes = router;
