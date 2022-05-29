/**
 * Create donations table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('donations', (table) => {
    table.increments('id').primary().unsigned();
    table.integer('donar_user_id').references('id').inTable('users').notNull();
    table.double('amount').notNull();
    table.string('message', 1000);
    table.integer('post_id').references('id').inTable('posts').notNull().onDelete('CASCADE');
    table.timestamp('donated_at').default(knex.fn.now()).notNull();
  });
}

/**
 * Drop donations table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('donations');
}