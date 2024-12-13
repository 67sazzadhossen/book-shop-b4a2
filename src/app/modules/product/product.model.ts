import { Schema, model } from 'mongoose';
import { TBook } from './product.interface';

const bookSchema = new Schema<TBook>({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Fiction', 'NonFiction', 'Fantasy', 'Science', 'History'],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export const BookModel = model<TBook>('Book', bookSchema);
