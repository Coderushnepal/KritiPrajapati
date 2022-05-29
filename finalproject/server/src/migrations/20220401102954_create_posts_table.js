/**
 * Create posts table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary().unsigned();
    table.string('post_title', 100).notNull();
    table.text('post_description').notNull();
    table.integer('owner_user_id').references('id').inTable('users').notNull();
    table.double('target_amount').notNull().unsigned();
    table.double('collected_amount').default(0);
    table.string('category', 50);
    table.integer('report_count').default(0);
    table.enum('post_status', ['active', 'completed', 'banned']).default('active');
    table.timestamp('start_date').default(knex.fn.now()).notNull();
    table.date('end_date').notNull();
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