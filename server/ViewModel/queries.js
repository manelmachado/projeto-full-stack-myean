'use strutc'

var conexao = require('../Model/conexao');

exports.tudo = (callback) => {
    conexao.conexao((con) => {
        con.query('select * from inventario', (err, resBanco) => {
            if (err) {
                console.log('erro na busca');
                callback({ res: err.message });
            } else {
                callback(resBanco);
            }
        })
    })
}

exports.peloId = (id, callback) => {
    conexao.conexao((con) => {
        con.query('select * from inventario where id=?', id, (err, resBanco) => {
            if (err) {
                console.log('erro na busca por id');
                callback({ res: err.message });
            } else {
                callback(resBanco)
            }
        })
    })
}

exports.inserir = (body, callback) => {
    conexao.conexao((con) => {
        con.query('insert into inventario set ?', body, (err, resBanco) => {
            if (err) {
                console.log(err);
                callback({ res: err.message });
            } else {
                callback({ 'res': 'Inserido!' });
            }
        });
    })
}

exports.atualizar = (body, callback) => {
    conexao.conexao((con) => {
        con.query('update inventario set ? where id= ?', [body, body.id], (err) => {
            if (err) {
                console.log(err);
                callback({ res: err.message });
            } else {
                callback({ res: 'Atualizado!' });
            }
        })
    })

}

exports.deletar = (id, callback) => {
    conexao.conexao((con) => {
        con.query('delete from inventario where id=?', id, (err) => {
            if (err) {
                console.log(err);
                callback({ res: err.message });
            } else {
                callback({ res: 'Deletado!' });
            }
        })
    })
}