exports.up = function(knex) {
    return knex.schema.createTable('incidents' ,function(table){
        table.increments(); //cria uma chave primaria automatico
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //armeza a ong de origem(relacionamento)

        table.foreign('ong_id').references('id').inTable('ongs'); //traz o id da tabela ong (chave estrangeira)
      });
};

exports.down = function(knex) {
  return knex.schemadropTable('incidents');
};
