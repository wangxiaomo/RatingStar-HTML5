
var app = require('http').Server(),
    io = require('socket.io').listen(app);

app.listen(30301);

function handler(req, res){
  
}

io.sockets.on('connection', function(socket){
  socket.on('score', function(d){ console.log(d); socket.emit('res', d); });
});
