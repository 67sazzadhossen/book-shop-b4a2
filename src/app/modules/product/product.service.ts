import { TBook } from './product.interface';
import { BookModel } from './product.model';

const createBookIntoDB = async (book: TBook) => {
  const result = await BookModel.create(book);
  return result;
};

const getAllBooksFromDB = async () => {
  const result = await BookModel.find();
  return result;
};

export const BookServices = {
  getAllBooksFromDB,
  createBookIntoDB,
};
