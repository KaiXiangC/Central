var app = require('http').createServer(null);
var io = require('socket.io')(app);

app.listen(81);

io.on('connection', function (socket) {
    socket.on('handshake1', function (data) {
        console.log(data);
        socket.emit('handshake2','002');
    });
    socket.on('chatroom', function(data) {
        console.log("chatroom:  " + data);
    });
    socket.on('speak', function(data) {
        socket.broadcast.emit('speak',data);
        console.log("speak:  " + data);
    });
    socket.on('service', function(data) {
        //用來傳代碼
        socket.broadcast.emit('service',data);
        console.log('service'+data);
    });
    socket.on('face_identification', function(data) {
        socket.broadcast.emit('face_identification',data);
        console.log('face_identification'+data);
    });
    socket.on('speaker_ecognition', function(data) {
        socket.broadcast.emit('speaker_ecognition',data);
        console.log('speaker_ecognition'+data);
    });
    socket.on('801', function(data) {
        socket.broadcast.emit('801',data);
        console.log("getkeywords:  " + data);
    });
    socket.on('802', function(data) {
        socket.broadcast.emit('802',data);
        console.log("Crawler:  " + data);
    });
    socket.on('803', function(data) {
        socket.broadcast.emit('803',data);
        console.log("showfilename:  " + data);
    });
    socket.on('804', function(data) {
        socket.broadcast.emit('804',data);
        console.log("CrawlerFlag:  " + data);
    });
    socket.on('805', function(data) {
        socket.broadcast.emit('805',data);
        console.log("get_news:  " + data);
    });

});