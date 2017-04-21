function allwo() {


    this.permi = function(req, res, next) {
        var liberados = [
            'http://localhost:4200',
        ];

        var urlDePedido = req.headers.origin;
        if (liberados.includes(urlDePedido)) {
            res.setHeader('Access-Control-Allow-Origin', urlDePedido);
        }

        //res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        next();
    }
}
module.exports = new allwo();