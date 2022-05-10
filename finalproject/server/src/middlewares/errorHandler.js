import Joi from 'joi';
import HttpStatusCodes from 'http-status-codes';

/**
 * Generic error handling middleware.
 *
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export default function (err, req, res, next) {
  const error = buildError(err);

  res.status(error.code).json(error);
}

/**
 * Build error object based on the type of error.
 *
 * @param {Object} err
 * @return {Object}
 */
function buildError(err) {
  // Check if the error is Joi and handle accordingly
  if (Joi.isError(err)) {
    return {
      code: HttpStatusCodes.BAD_REQUEST,
      message: 'Validation Error',
      details: err.details.map((e) => e.message)
    };
  }

  // Check if the error is Boom type an handle accordingly
  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message
    };
  }

  if (err.name === 'UnauthorizedError') {
    return {
      code: HttpStatusCodes.UNAUTHORIZED,
      message: HttpStatusCodes.getStatusText(HttpStatusCodes.UNAUTHORIZED),
      details: err.message
    };
  }

  // Any other error types will be treated as an internal server error
  return {
    code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    message: HttpStatusCodes.getStatusText(HttpStatusCodes.INTERNAL_SERVER_ERROR),
    details: err.message || ''
  };
}