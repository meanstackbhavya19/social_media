exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('email').unique();
      table.timestamps(true, true);
      table.string('password');
    });
    // return knex.insert({id:1,name:"bhavya",email:"abc@gmail.com",password:"bhavya"}).into("users")
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };


