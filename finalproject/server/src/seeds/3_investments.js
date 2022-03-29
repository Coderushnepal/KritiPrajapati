/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('table_name')
    .del()
    .then(() => {
      return knex('table_name').insert([
        {
          colName: 'rowValue',
          colName2: 'rowValue'
        },
        {
          colName: 'rowValue',
          colName2: 'rowValue'
        }
      ]);
    });
}