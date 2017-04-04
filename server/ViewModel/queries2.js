'use strict'

var con = require('../Model/conexao2');
//var res = require('../Model/model/Response');

class Queries {
    constructor() {}

    tudo() {
        con.conexao.query('select * from inventario', (err, resBanco) => {
            if (err) {
                console.log('erro na busca');
                return res = err.message;
            } else {
                return resBanco;
            }
        })
    }

    peloID(id) {
        con.conexao.query('select * from inventario where id=?', id, (err, resBanco) => {
            if (err) {
                return res = err.message;
            } else {
                return resBanco;
            }
        })
    }

    inserir() {
        con.conexao.query('insert into inventario set ?', body, (err, resBanco) => {
            if (err) {
                console.log(err);
                return res = err.message;
            } else {
                return res = `Inserido!`;
            }
        })
    }

    atualizar() {
        con.conexao.query('update inventario set ? where id= ?', [body, body.id], (err) => {
            if (err) {
                return res = err.message;
            } else {
                return res = `Atualizado!`;
            }
        })
    }

    deletar() {
        con.conexao.query('delete from inventario where id=?', id, (err) => {
            if (err) {
                return res = err.message;
            } else {
                return res = `Deletado!`;
            }
        })
    }

}
module.exports = new Queries();