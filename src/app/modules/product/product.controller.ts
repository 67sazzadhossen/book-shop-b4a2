import { Request, Response } from 'express';
import { BookServices } from './product.service';
import { bookValidationSchema } from './product.validation';

// create book into db
const createBook = async (req: Request, res: Response) => {
  try {
    const { book } = req.body;

    const zodParsedData = bookValidationSchema.parse(book);

    const result = await BookServices.createBookIntoDB(zodParsedData);
    res.status(200).json({
      message: 'Book created successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      status: false,
      error,
    });
  }
};

// get all books from db
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.getAllBooksFromDB();
    res.status(200).json({
      message: 'Books data are retrived successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      status: false,
      error,
    });
  }
};

// get a single book from db
const getSingleBook = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await BookServices.getSingleBookFromDB(productId);
    res.status(200).json({
      message: 'Book data is retrived successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      status: false,
      error,
    });
  }
};

// update a book data in db
const updateBook = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const { book } = req.body;
  try {
    const result = await BookServices.updateBookDataInDB(productId, book);
    res.status(200).json({
      message: 'Book updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      status: false,
      error,
    });
  }
};

// delete a book from db
const deleteBook = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    await BookServices.deleteBookDataFromDB(productId);
    res.status(200).json({
      message: 'Book deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      status: false,
      error,
    });
  }
};

export const bookControllers = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
