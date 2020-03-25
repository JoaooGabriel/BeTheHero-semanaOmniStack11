const express = require('express'); //importando a biblioteca express

const OngController = require('./controllers/OngController'); //importando ao arquivo de cadastro de ongs
const IncidentsController = require('./controllers/IncidentsController'); //importando ao arquivo de cadastro de ongs
const ProfileController = require('./controllers/ProfileController'); //importando ao arquivo de controle de casos por ongs
const SessionController = require('./controllers/SessionController'); //importando ao arquivo de login das ongs

const routes = express.Router(); //desclopando  o modulo de routas do express em uma var

routes.post('/sessions', SessionController.create); //criando rota de login das ongs

routes.get('/ongs', OngController.index); //criando rota para listar as ongs do banco + .nome da função
routes.post('/ongs', OngController.create); //criando a rota de cadastro + .nome da função

routes.get('/profile', ProfileController.index); //criado rota de controle de casos por ong

routes.get('/incidents', IncidentsController.index); //criando a rota de cadastro de casos
routes.post('/incidents', IncidentsController.create); //criando rota para listar os casos do banco + .nome da função
routes.delete('/incidents/:id', IncidentsController.delete); //deletar um caso 

module.exports = routes; // exportando a var routas do arquivo routes.js

/**
 * Rota / Recurso
 */

 /**
  * 
  * Get: Buscar/Listar informção do back-end
  * Post: Criar informação no back-end
  * Put: Alterar informação no back-end
  * Delete: Deletar informação no back-end
  * 
  */

 /**
  * Query Params: Parâmetros nomeados/enviados na rotas após '?' (Filtro, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */
 
/**
 * Request: guarda todos os dados que vem atravez da nossa requisição
 * Response: responsavel por retornar uma resposta
 */