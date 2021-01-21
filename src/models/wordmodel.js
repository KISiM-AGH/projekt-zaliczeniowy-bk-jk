const {Model} = require ('objection')
const knex = require('../knex')
const BaseModel = require('./basemodel');
//nazwa pliku do zmiany(base.model?)
Model.knex(knex);

class Word extends BaseModel{
    static get tableName(){
        return 'words';
    }
    static get jsonSchema(){ //Sprawdzenie danych od użytkownika
        return{
            type: 'object',
            properties: {
                //id nadawane przez baze
                //id: {type: 'Integer'},
                term: {type: 'string'},
                numberOfAppearances: {type: 'integer'},
                numberOfGuesses: {type: 'integer'}
                //pozycje odgadnietych i nieodgadnietych liter,licba mozliwych pomylek
            }
        }
    }
}

module.exports = Word;