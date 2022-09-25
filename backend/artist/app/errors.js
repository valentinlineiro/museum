class ApiError extends Error {
  constructor(code, message) {
    super(message)
    this.code = code
  }
}

const errorHandler = (err, req, res, next) => {
  const status = err.code || 500
  const message = err.message || 'Something went wrong'
  res.status(status).json({
    status,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  })
}

module.exports = { ApiError, errorHandler }
