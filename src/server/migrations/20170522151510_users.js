
exports.up = function(knex, Promise) {
  knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('email').notNullable().defaultsTo('');
    table.string('password').notNullable().defaultsTo('');
    table.string('password').notNullable().defaultsTo('');
    table.text('profileUrl').notNullable().defaultsTo('http://www.zwani.com/graphics/hello_funny/images/56467.jpg');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users');
};
