var mongoose = require('mongoose');
var config = require('../config');
var logger = require('../helpers/winston');

mongoose.connect(config.db.mongodb.connectionURL);

var db = mongoose.connection;

db.on('error', function (err) {
    logger.error("Mongodb connection error", err);
});

db.once('open', function () {
    logger.info('Mongodb connected');
});