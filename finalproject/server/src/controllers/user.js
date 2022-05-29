import * as userService from "../services/user.js";

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

/**
 * Controller to get details of all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getUsers(req, res, next) {
  userService
    .getAllUsers(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getUser(req, res, next) {
  userService
    .getUserDetails(req.user)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update details of user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function updateUser(req, res, next) {
  userService
    .updateUserDetails(req.user, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of user profile by id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getProfileDetail(req, res, next) {
  const userId = req.params.id;
  userService
    .getProfileDetail(userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
