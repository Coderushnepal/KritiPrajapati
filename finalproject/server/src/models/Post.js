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

  async getCarDetails(carId) {
    const [details] = await this.query(getCarDetailsQuery, { carId });

    return details || null;
  }
}

export default Post;