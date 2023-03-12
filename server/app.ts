import express from 'express';
import morgan from 'morgan';

import resourceNotFoundHandler from './errors/404';
import globalErrorHandler from './errors/errorHandler';

const app = express();

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// 404 error for route not found
app.all('*', resourceNotFoundHandler);

app.use(globalErrorHandler);

export default app;
