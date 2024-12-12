//Import biblioteki path
const path=require('path')

//knex- ORM do JS'a
const config = {
  client: 'mysql',
  connection: {
    host: "127.0.0.1",
    user: 'root',
    password: '',
    database: 'hangman'
  },
  migrations: {
    directory: path.join(__dirname,'src','migrations')
    //tableName: 'knex_migrations'
  }
};

module.exports = config;
