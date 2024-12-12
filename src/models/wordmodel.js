const {Model} = require ('objection')
const knex = require('../knex')
const BaseModel = require('./basemodel');
Model.knex(knex);

class Word extends BaseModel{
    static get tableName(){
        return 'words';
    }
    static get jsonSchema(){ //Sprawdzenie danych od użytkownika
        return{
            type: 'object',
            properties: {
                //id: {type: 'Integer'}, //nadawane przez baze
                term: {type: 'String'},
                numberOfAppearances: {type: 'integer'},
                numberOfGuesses: {type: 'integer'},
                maxNumberOfMistakes: {type: 'integer'},
                lengthOfTerm: {type: 'integer'}
                //pozycje odgadnietych i nieodgadnietych liter,licba mozliwych pomylek
            }
        }
    }
}

module.exports = Word;