import DBModel from './DBModel.js';
import getAllPostsQuery from '../db/queries/getAllPosts.js';
import getPostDetailsQuery from '../db/queries/getPostDetails.js';

/**
 * Model for the 'posts' table.
 *
 * @class Post
 */
class Post extends DBModel {
  constructor() {
    super('posts');
  }

  getAllPosts() {
    return this.query(getAllPostsQuery);
  }

  async getPostDetails(postId) {
    const [details] = await this.query(getPostDetailsQuery, { postId });

    return details || null;
  }
}

export default Post;