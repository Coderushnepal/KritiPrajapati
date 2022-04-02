import DBModel from './DBModel.js';

/**
 * Model for the 'donations' table.
 *
 * @class Donation
 */
class Donation extends DBModel {
  constructor() {
    super('donations');
  }
}

export default Donation;