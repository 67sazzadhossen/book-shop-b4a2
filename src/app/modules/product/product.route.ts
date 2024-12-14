import express from 'express';
import { bookControllers } from './product.controller';

const router = express.Router();

// get all books
router.get('/', bookControllers.getAllBooks);

// get a book by id
router.get('/:productId', bookControllers.getSingleBook);

// create a book in to db
router.post('/', bookControllers.createBook);

// update a book in db
router.put('/:productId', bookControllers.updateBook);

// delete a book data from db
router.delete('/:productId', bookControllers.deleteBook);

export const BookRoutes = router;
