
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'rowValue1', step_id: 1},
        {recipe_name: 'rowValue2', step_id: 2},
        {recipe_name: 'rowValue3', step_id: 2}
      ]);
    });
};
