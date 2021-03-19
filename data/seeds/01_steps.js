
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 'rowValue1', step_instructions: '', ingredient_id: 1},
        {step_number: 'rowValue2', step_instructions: '', ingredient_id: 2},
        {step_number: 'rowValue3', step_instructions: '', ingredient_id: 3}
      ]);
    });
};
