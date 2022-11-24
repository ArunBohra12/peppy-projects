import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

const app = express();

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// 404 error for route not found
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't ${req.method} ${req.path}`,
  });
});

export default app;
