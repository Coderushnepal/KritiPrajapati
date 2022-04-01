import * as userService from '../services/user.js';

/**
 * Controller to add a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function addUser(req, res, next) {
  userService
    .createUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller for user login.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req, res, next) {
  userService
    .login(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}