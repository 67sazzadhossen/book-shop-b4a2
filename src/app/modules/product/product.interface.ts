export type TBook = {
  title: string;
  author: string;
  price: number;
  category: 'Fiction' | 'NonFiction' | 'Fantasy' | 'Science' | 'History';
  description: string;
  quantity: number;
  inStock: boolean;
};
