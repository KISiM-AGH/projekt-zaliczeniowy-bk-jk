const knexconfig = require('../knexfile')
const knex = require('knex')(knexconfig)
//require(knex) zwraca funkcje i od razu jest wywolywana z argumentem knex config
module.exports = knex;