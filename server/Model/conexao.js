'use strict'

var mySql = require('mysql');

var con = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'thiago',
    database: 'demo'
});
con.connect((err) => {
    if (err) {
        console.log('deu merda na conexão!!!');
        console.log(err);
        //con.end();
        return;
    } else {
        console.log('conectou porra ;)');
        //return con;
    }
});
exports.conexao = function(callback) {
    callback(con);
}









































/*var mySql = require('mysql');


var con = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'thiago',
    database: 'demo'
});

con.connect((err) => {
    if (err) {
        console.log('deu merda na conexão!!!');
        return;
    } else {
        console.log('conectou porra ;)');
        return con;
    }
});

var selecionarTudo = con.query('select * from inventario', (err, res) => {
    if (err) {
        console.log('erro na busca');
    } else {
        console.log(res);
    }
});


con.end((err) => {
    if (err) {
        console.log('deu erro para desconectar!!!');
    } else {
        console.log('blz, desconectou');
    }
});


module.exports = conexao;*/