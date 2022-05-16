import * as apiService from "../services/api.js";

/**
 * Controller to get API details.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getAPIDetails(req, res, next) {
  try {
    const data = apiService.getAPIDetails();

    res.json(data);
  } catch (err) {
    next(err);
  }
}