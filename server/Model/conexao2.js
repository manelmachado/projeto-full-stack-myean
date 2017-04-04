'use strict'

var mySql = require('mysql');

var con;

class Conexao {

    constructor() {
        con = mySql.createConnection({
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
                return;
            } else {
                console.log('conectou porra ;)');
            }
        });
    }

    conexao() {
        return con;
    }
}
module.exports = new Conexao();