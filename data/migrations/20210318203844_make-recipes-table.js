
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 128)
      table.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable('steps', table => {
      table.increments('step_id')
      table.integer('step_number')
      table.string('step_instructions', 128)
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable('ingredients', table => {
      table.increments('ingredient_id')
      table.string('ingredient_name', 128)
      table.float('quantity')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
