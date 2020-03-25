const knex = require('knex'); //importando a biblioteca knex
const configuration = require('../../knexfile') //importando o arquivo knexfile

const connection = knex(configuration.development); //conectando as configurações de desenvolvimento

module.exports = connection;