import { TBook } from './product.interface';
import { BookModel } from './product.model';
import { Types } from 'mongoose';

// create a book into db
const createBookIntoDB = async (book: TBook) => {
  const result = await BookModel.create(book);
  return result;
};

// get all books from db
const getAllBooksFromDB = async () => {
  const result = await BookModel.find();
  return result;
};

// get a single book from db by id
const getSingleBookFromDB = async (id: string) => {
  const result = await BookModel.findOne({ _id: new Types.ObjectId(id) });
  return result;
};

export const BookServices = {
  getAllBooksFromDB,
  getSingleBookFromDB,
  createBookIntoDB,
};
