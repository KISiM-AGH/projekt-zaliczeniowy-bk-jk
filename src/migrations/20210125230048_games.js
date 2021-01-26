exports.up = function(knex) {
    return knex.schema.createTable('words',(table)=>{
        table.increments().primary(); //tworzneie kolumny id jako klucza głownego
        table.string('term').notNullable().unique();
        table.integer('numberOfAppearances').notNullable();
        table.integer('numberOfGuesses').notNullable();
        table.integer('maxNumberOfMistakes').notNullable();
        table.integer('lengthOfTerm').notNullable();
        //dodac nowe pola
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('words');
};
