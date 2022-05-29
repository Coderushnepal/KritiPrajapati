/**
 * Create users table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary().unsigned();
    table.string('full_name', 50).notNull();
    table.string('email', 50).unique().notNull();
    table.string('password', 200).notNull();
    table.string('phone_number', 10).unique().notNull();
    table.double('amount').default(10000.00).notNull();
    table.string('avatar', 500).notNull();
    table.timestamp('created_at').default(knex.fn.now()).notNull();
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