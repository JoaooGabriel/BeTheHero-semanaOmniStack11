const express = require('express'); //importando a biblioteca express
const cors = require('cors');
const routes = require('./routes'); //importando o arquivo routes.js

const app = express(); //instanciando a var app e chamando a var express

app.use(cors());

app.use(express.json()); //Antes de todas as requisições, o express converter o json em objeto JavaScript
app.use(routes);

app.listen(3333); //porta