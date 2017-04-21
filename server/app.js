'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),


    config = require('./Model/config/configuracoes'),
    per = require('./Model/config/permissao'),
    queries = require('./ViewModel/queries');

var app = express();

//app.use(config.config);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(per.permi);


app.get('/inventario/', function(req, res) {
    queries.tudo(function(resp) {
        res.send(resp);
    });
})

.get('/inventario/:id', (req, res) => {
    queries.peloId(req.params.id, function(resp) {
        res.send(resp);
    })
})

.post('/inventario/', (req, res) => {
    queries.inserir(req.body, (resp) => {
        res.send(resp);
    })
})

.put('/inventario/', (req, res) => {
    queries.atualizar(req.body, (resp) => {
        res.send(resp);
    })
})

.delete('/inventario/:id', (req, res) => {
    queries.deletar(req.params.id, (resp) => {
        res.send(resp);
    })
})

.listen(8080, () => {
    console.log('servidor rodando!!!');
});