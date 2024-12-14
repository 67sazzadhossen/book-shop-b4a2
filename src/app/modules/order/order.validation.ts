import { z } from 'zod'; // Zod validation library
import { Types } from 'mongoose'; // Import `Types` from mongoose to use ObjectId validation

// Zod schema for validating Order data
export const orderValidationSchema = z.object({
  email: z.string().email('Invalid email format').trim(), // Ensure it's a valid email
  product: z.string().refine((id) => Types.ObjectId.isValid(id), {
    message: 'Invalid product ID', // Ensure product ID is valid ObjectId
  }),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1' }), // Ensure quantity is >= 1
  totalPrice: z.number().min(0, { message: 'Total price cannot be negative' }), // Ensure total price is >= 0
});
