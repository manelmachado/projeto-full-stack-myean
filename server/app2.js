'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),


    config = require('./Model/config/configuracoes'),
    per = require('./Model/config/permissao'),
    queries = require('./ViewModel/queries2');

var app = express();

//app.use(config.config);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(per.permi);


app.get('/inventario/', function(req, res) {
    res.send(queries.tudo());
})

.get('/inventario/:id', (req, res) => {
    res.send(queries.peloID(req.params.id));
    
})

.post('/inventario/', (req, res) => {
    res.send(queries.inserir(req.body));
})

.put('/inventario/', (req, res) => {
    res.send(queries.atualizar(req.body));
})

.delete('/inventario/:id', (req, res) => {
    res.send(queries.deletar(req.params.id));
})

.listen(3000, () => {
    console.log('servidor rodando!!!');
});