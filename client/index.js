var socket = require('socket.io-client')('http://127.0.0.1:81');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

socket.on('connect', function(){
    //先傳001給server
    socket.emit('handshake1',001);
});
socket.on('handshake2', function(data){
    //伺服器回傳002
    console.log(data);
    ask();
});
socket.on('service', function(data){
    console.log("received:"+data);
});
function ask(){
    rl.question('請輸入要傳送的訊息: ', (msg) => {
        socket.emit('service',msg);
        ask();
    });
};

//001  002是檢查能不能連到中控的訊息
//可以砍掉這部分