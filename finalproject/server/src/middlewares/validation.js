import Joi from "joi";

/**
 * Validate request body.
 *
 * @param {Object} schema
 * @return {Function}
 */
export function validateBody(schema) {
  return function (req, res, next) {
    try {
      Joi.assert(req.body, schema, { abortEarly: false });

      next();
    } catch (err) {
      next(err);
    }
  };
}
/**
 * Validate request query params.
 *
 * @param {Object} schema
 * @return {Function}
 */
export function validateQueryParams(schema) {
  return function (req, res, next) {
    try {
      Joi.assert(req.query, schema, { abortEarly: false });

      next();
    } catch (err) {
      next(err);
    }
  };
}
