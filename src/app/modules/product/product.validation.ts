import { z } from 'zod';

export const bookValidationSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(255, 'Title must be less than 255 characters'),
  author: z
    .string()
    .min(1, 'Author is required')
    .max(255, 'Author must be less than 255 characters'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.enum(['Fiction', 'NonFiction', 'Fantasy', 'Science', 'History'], {
    errorMap: () => ({ message: 'Invalid category' }),
  }),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().int().min(0, 'Quantity cannot be negative'),
  inStock: z.boolean(),
});
