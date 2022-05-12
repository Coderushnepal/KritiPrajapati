import DBModel from './DBModel.js';

/**
 * Model for the 'updates' table.
 *
 * @class Update
 */
class Update extends DBModel {
  constructor() {
    super('updates');
  }
}

export default Update;