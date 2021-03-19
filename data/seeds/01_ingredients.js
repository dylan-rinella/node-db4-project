
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'cheese', quantity: 0.2},
        {ingredient_name: 'cream', quantity: 0.5},
        {ingredient_name: 'milk', quantity: 2.2}
      ]);
    });
};
