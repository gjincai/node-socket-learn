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

var mes = ''
var userNumber = 0

io.on('connection', function(socket){
  socket.emit('news', {data: '特大新闻国务院放大假了啊'})
  socket.on('chat', function (data) {
    console.log(data)
  })

  socket.on('join', function (data) {
    mes = data
    ++userNumber
    socket.broadcast.emit('joinSuc', mes)
    // 当前人数，加入还是退出
  })
  socket.on('disconnect', function () {
    --userNumber
    console.log(userNumber)
  })
});


