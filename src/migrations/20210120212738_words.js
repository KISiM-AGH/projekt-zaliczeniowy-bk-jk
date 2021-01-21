//aktualizacja bazy
exports.up = function(knex) {
    return knex.schema.createTable('words',(table)=>{
        table.increments().primary(); //tworzneie kolumny id jako klucza głownego
        table.string('term').notNullable();
        table.integer('numberOfAppearances').notNullable();
        table.integer('numberOfGuesses').notNullable();
        //dodac nowe pola
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
};
//cos jak rollback bazy
exports.down = function(knex) {
  return knex.schema.dropTable('words')
};
