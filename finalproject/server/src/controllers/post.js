import * as postService from '../services/post.js';

/**
 * Controller to add a new post.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function addPost(req, res, next) {
  postService
    .createPost(req.body,req.user)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of all posts.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function getPosts(req, res, next) {
  postService
    .getAllPosts(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of a post.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function getPost(req, res, next) {
  postService
    .getPost(+req.params.postIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update the details of a post.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function updatePost(req, res, next) {
  postService
    .updatePost(+req.params.postIdentifier, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to remove a post record.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function removePost(req, res, next) {
  postService
    .removePost(+req.params.postIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to report the details of a post.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function reportPost(req, res, next) {
  postService
    .reportPost(+req.params.postIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}