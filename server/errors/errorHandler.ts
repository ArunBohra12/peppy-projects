// This file controls the errors in the whole application
import { NextFunction, Request, Response } from 'express';
import AppError from './AppError';

type CustomError = {
  status?: string;
  message: string;
  statusCode?: number;
  stack?: unknown;
  isOperational?: Boolean;
};

/**
 * Sends a raw error to the client
 * Should only run in development environment
 */
const handleErrorDev = (err: CustomError, res: Response) => {
  res.status(err.statusCode || 500).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

/**
 * Sends an error to the client in production
 */
const handleErrorProd = (err: CustomError, res: Response) => {
  if (err.isOperational) {
    return res.status(err.statusCode || 500).json({
      status: err.status,
      message: err.message,
    });
  }

  // Programming or other unknown error: don't leak error details
  console.error('ERROR ⚠️⚠️', err);

  res.status(500).json({
    status: 'error',
    message: 'Sorry, something went very wrong!',
  });
};

/**
 * This is the global error handling middleware
 * Any error in the app flows through this middleware
 */
const globalErrorHandler = (error: Error | AppError, req: Request, res: Response, next: NextFunction) => {
  const err: CustomError = error;

  if (!(error instanceof AppError)) {
    err.status = 'fail';
    err.statusCode = 500;
  }

  if (process.env.NODE_ENV === 'development') {
    handleErrorDev(err, res);
    return;
  }

  handleErrorProd(err, res);
};

export default globalErrorHandler;
