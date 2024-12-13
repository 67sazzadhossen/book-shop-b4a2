import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { BookRoutes } from './app/modules/product/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', BookRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('App is running');
});

export default app;
