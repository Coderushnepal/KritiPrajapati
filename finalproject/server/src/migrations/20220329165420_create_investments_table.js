/**
 * Create transactions table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('transactions', (table) => {
    //
  });
}

/**
 * Drop transactions table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('transactions');
}