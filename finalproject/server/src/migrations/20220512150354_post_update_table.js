/**
 * Create updates table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('updates', (table) => {
    table.increments('id').primary().unsigned();
    table.integer('post_owner_id').references('id').inTable('users').notNull();
    table.text('message');
    table.integer('post_id').references('id').inTable('posts').notNull().onDelete('CASCADE');
    table.timestamp('updated_at').default(knex.fn.now()).notNull();
  });
}

/**
 * Drop updates table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('updates');
}