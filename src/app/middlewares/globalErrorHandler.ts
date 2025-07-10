import { NextFunction, Request, Response } from 'express';
import { TErrorSources } from '../interface/error';
import config from '../config';
import { ZodError } from 'zod';
import handleZodError from '../errors/handleZodError';
import handlevalidationError from '../errors/handleValidationError';
import handleCastError from '../errors/handleCastError';
import AppError from '../errors/AppError';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorSurces: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSurces = simplifiedError.errorSources;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handlevalidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSurces = simplifiedError.errorSources;
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSurces = simplifiedError.errorSources;
  } else if (err instanceof AppError) {
    ((statusCode = err.statusCode), (message = err.message));
    errorSurces = [
      {
        path: '',
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err.message;
    errorSurces = [
      {
        path: '',
        message: err.message,
      },
    ];
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorSurces,
    err,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};
export default globalErrorHandler;
