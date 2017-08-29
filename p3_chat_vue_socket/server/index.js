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

  socket.on('userJoining', function (data) {
    mes = data
    socket.nowName = mes.m_name
    ++userNumber
    console.log(userNumber)
    mes.m_num = userNumber
    socket.broadcast.emit('userJoined', {mes})
    // 当前人数，加入还是退出
  })
  socket.on('disconnect', function () {
    --userNumber
    console.log(userNumber)
    var date = new Date()
    var m_time =  (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + date.getHours() + ':' + date.getMinutes()
    socket.broadcast.emit('userQuit', {
      mes: {
        m_time: m_time,
        m_name: socket.nowName,
        m_type: 'center',
        m_mes: '退出',
        m_num: userNumber
      }
    });
  })
  // 接收消息
  socket.on('sendChat', function (data) {
    mes = data.chat
    console.log(mes)
    socket.broadcast.emit('newChat', {mes})
    // 当前人数，加入还是退出
  })
});


