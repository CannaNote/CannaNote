
exports.up = function(knex, Promise) {
  return knex.schema.createTable('strains', (table) => {
    table.increments('id');
    table.string('name');
    table.float('thc').defaultsTo(0.0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('strains');
};
