const {Model} = require('objection')
const knex = require('../knex')

Model.knex(knex);

class BaseModel extends Model{
    $beforeInsert(queryContext) {
        this.createAt = new Date().toISOString();
        this.updateAt = new Date().toISOString();
    }

    $beforeUpdate(opt, queryContext) {
        this.updateAt = new Date().toISOString();
    }

    //zabezpieczenie przed zmiana identyfikatora rekordu
    $formatDatabaseJson(json) {
        json = super.$formatDatabaseJson(json);
        delete json.id;
        return json;
    }
}
module.exports=BaseModel;