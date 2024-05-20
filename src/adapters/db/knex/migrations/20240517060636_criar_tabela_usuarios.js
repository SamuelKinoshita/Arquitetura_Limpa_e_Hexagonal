
exports.up = async function(knex) {
    const existe = await knex.schema.hasTable('usuarios');
    if(existe) return
  
    return knex.schema.createTable('usuarios', table => {
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
    })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('usuarios');
};
