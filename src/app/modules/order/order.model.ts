import { Schema, model, Types } from 'mongoose'; // Import required modules from mongoose
import { TOrder } from './order.interface'; // Import the TOrder interface if needed

// Define the Order Schema
const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    product: {
      type: Types.ObjectId,
      ref: 'Product', // Assuming there is a Product model that this references
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'], // Optional validation: Quantity can't be 0 or negative
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price cannot be negative'], // Optional validation: Total price can't be negative
    },
  },
  {
    timestamps: true, // Optional: Add createdAt and updatedAt fields
  },
);

// Create the Order model
export const OrderModel = model<TOrder>('Order', orderSchema);
