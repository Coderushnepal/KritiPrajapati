import * as updateService from "../services/update.js";

/**
 * Controller to add a new update.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function addUpdate(req, res, next) {
  updateService
    .createUpdate(req.body, req.user)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of all ps.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getUpdates(req, res, next) {
  updateService
    .getAllUpdates(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
