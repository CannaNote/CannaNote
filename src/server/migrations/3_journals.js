
exports.up = function(knex, Promise) {
  return knex.schema.createTable('journals', (table) => {
    table.increments('id');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
    table.string('title').notNullable();
    table.text('body').notNullable().defaultsTo('');
    table.integer('strain_id').references('id').inTable('strains').onDelete('CASCADE').index();
    table.string('effects').defaultsTo('[]');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('journals');
};
