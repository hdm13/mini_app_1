/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies_list').del()
  await knex('movies_list').insert([
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
    {title: 'SLC Punk'},
    {title: 'Gone in 60 Seconds'},
    {title: 'Saw'},
    {title: 'Interstellar'},
    {title: 'Shrek'},
  ]);
};
