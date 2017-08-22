// Setup basic express server
var express = require('express');
var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);

http.listen(8081, function () {
  console.log('Server listening at port 8081');
});

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

var userName = ''
var userNumber = 0

io.on('connection', function(socket){
  socket.emit('open', {data: 'link success'})
  socket.emit('news', {data: '特大新闻国务院放大假了啊'})
  socket.on('chat', function (data) {
    console.log(data)
  })
  socket.on('join', function (data) {
    userName = data.userName
    ++userNumber
    console.log(userName)
  })
  socket.on('disconnect', function () {
    --userNumber
    console.log(userNumber)
  })
});


