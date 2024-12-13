import { TBook } from './product.interface';
import { BookModel } from './product.model';

const createBookIntoDB = async (book: TBook) => {
  const result = await BookModel.create(book);
  return result;
};

export const BookServices = {
  createBookIntoDB,
};
