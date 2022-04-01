/**
 * Create posts table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary().unsigned();
    table.string('post_name', 100).notNull();
    table.string('post_description', 100).notNull();
    table.integer('owner_user_id').references('id').inTable('users').notNull();
    table.string('category', 20).notNull();
    table.timestamp('created_at').default(knex.fn.now()).notNull();
  });
}

/**
 * Drop posts table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('posts');
}