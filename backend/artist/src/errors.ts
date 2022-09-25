export class ApiError extends Error {
  constructor(public code: number, message: string) {
    super(message);
  }
}

export const errorHandler = (err: ApiError, req, res, next) => {
  const status = err.code || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({
    status,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  });
};
