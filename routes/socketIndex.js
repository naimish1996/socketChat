var express = require('express');
var router = express.Router();
var app = require('../app').app;

//socket
var server = require('http').Server(app);
var io = require('socket.io')(server);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

// load socket.js and pass it the socket.io object
require('../modules/socket')(io);

module.exports = {router: router, server: server};
// exports.server = server;
