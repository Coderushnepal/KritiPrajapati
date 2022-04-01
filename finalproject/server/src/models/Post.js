import DBModel from './DBModel.js';

/**
 * Model for the 'posts' table.
 *
 * @class Post
 */
class Post extends DBModel {
  constructor() {
    super('posts');
  }
}

export default Post;