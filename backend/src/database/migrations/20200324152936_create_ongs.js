exports.up = function(knex) {
  return knex.schema.createTable('ongs' ,function(table){
    table.string('id').primary(); //tipo, nome do campo, se é chave primario ouy se não pode ser nula
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
}; //metodo up serve para criar a tabela

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
}; //se precisar deletar uma tabela
