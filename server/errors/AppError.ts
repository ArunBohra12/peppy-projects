/**
 * This is a custom error for the application
 * It contains additional isOperational and status than the Error object
 */
class AppError extends Error {
  public isOperational: boolean;
  public status: 'fail' | 'error';
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    // isOperational property is some error that is expected beforehand
    this.isOperational = true;

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
