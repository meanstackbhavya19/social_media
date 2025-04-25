exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table) {
      table.timestamp('registered_at').nullable();
      table.timestamp('last_login_at').nullable();
      table.timestamp('last_logout_at').nullable();
      table.boolean('is_logged_in').defaultTo(false);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
      table.dropColumn('registered_at');
      table.dropColumn('last_login_at');
      table.dropColumn('last_logout_at');
      table.dropColumn('is_logged_in');
    });
  };