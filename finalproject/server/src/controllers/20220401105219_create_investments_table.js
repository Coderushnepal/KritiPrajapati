/**
 * Create investments table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('investments', (table) => {
    table.increments('id').primary().unsigned();
    table.integer('investor_user_id').references('id').inTable('users').notNull();
    table.double('amount').notNull();
    table.integer('post_id').references('id').inTable('posts').notNull();

    table.timestamp('invested_at').default(knex.fn.now()).notNull();
  });
}

/**
 * Drop investments table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('investments');
}