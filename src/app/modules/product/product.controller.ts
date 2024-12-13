import { Request, Response } from 'express';
import { BookServices } from './product.service';

const createBook = async (req: Request, res: Response) => {
  const data = req.body;

  const result = await BookServices.createBookIntoDB(data);
  res.status(200).json({
    message: 'Book created successfully',
    data: result,
  });
};

export const bookControllers = {
  createBook,
};
