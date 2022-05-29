import * as donateService from "../services/donate.js";

/**
 * Controller to add a new donation.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function addDonation(req, res, next) {
  donateService
    .createDonation(req.body, req.user)
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
export function getDonations(req, res, next) {
  donateService
    .getAllDonations(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}