exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('name').unique().notNullable();
        table.string('password').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};