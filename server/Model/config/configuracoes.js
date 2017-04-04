var bodyParser = require('body-parser');

exports.config = function() {
    bodyParser.urlencoded({ extended: true });
    bodyParser.json();

}