var express = require('express');
var router = express.Router();
var server = require('../app').server;
// var io = require('socket.io')(server);


module.exports = function(io) {
// router.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
console.log('hello');
};
