const path=require('path')
//generalnie knex sluzy do tworzenia zapytan sql i laczenia ich z jsowym kodem
const config = {
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: 'root',
        password: '',
        database: 'hangman'
    },
    /*client: 'sqlite3',
    connection: {
        filename: './dev.sqlite3'
    },*/
    migrations: {
      directory: path.join(__dirname,'src','migrations')
      //tableName: 'knex_migrations'
    }
};

module.exports = config;
