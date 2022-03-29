/**
 * Create users table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    //
  });
}

/**
 * Drop users table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}