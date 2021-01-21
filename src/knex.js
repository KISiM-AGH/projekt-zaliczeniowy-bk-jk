const knexconfig = require('../knexfile')
const knex = require('knex')(knexconfig) //przypisanie i uruchomienie funkcji z danymi z konfiguracji
//require(knex) zwraca funkcje i od razu jest wywolywana z argumentem knex config
module.exports = knex;