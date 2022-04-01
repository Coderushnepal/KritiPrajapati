import DBModel from './DBModel.js';

/**
 * Model for the 'users' table.
 *
 * @class User
 */
class User extends DBModel {
  constructor() {
    super('users');
  }
}

export default User;