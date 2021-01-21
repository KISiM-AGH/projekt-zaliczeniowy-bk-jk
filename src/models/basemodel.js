const {Model} = require('objection')
const knex = require('../knex')

Model.knex(knex);

class BaseModel extends Model{
    //Dodawanie informacji o dacie stworzenia,zmiany
    $beforeInsert(queryContexts) {
        this.createdAt = new Date();//.toISOString();
        this.updatedAt = new Date();//.toISOString();
    }

    $beforeUpdate(opt, queryContext) {
        this.updatedAt = new Date();//.toISOString();
    }

    //zabezpieczenie przed zmiana identyfikatora rekordu
    $formatDatabaseJson(json) {
        json = super.$formatDatabaseJson(json);
        delete json.id; //usuwa pole id jeśli prześle je użytkownik
        return json;
    }
}
module.exports=BaseModel;