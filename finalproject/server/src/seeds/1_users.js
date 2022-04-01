/**
 * Delete existing entries and seed values for `users`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          email: "kritiipraz@outlook.com",
          full_name: "Kriti Prajapati",
          phone_number: "9818253535",
          password: "helloworld",
          avatar : `https://avatars.dicebear.com/api/big-smile/9818253535.svg`,
        },
      ]);
    });
}
