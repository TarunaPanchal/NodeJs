var net = require('net');

var server = net.createServer(function(connect){
    console.log('server connected');
    connect.on('end',function(){
        console.log('Server DIsconneted');
    });
    connect.write('hello\r\n');
    connect.pipe(connect);
});

server.on('error',function(e){
    if(e.code == 'EADDRINUSE'){
        console.log('address in use , retrying...');
        setTimeout(function (){
            server.close();
            server.listen(PORT,HOST);
        },1000);
    }
});

server.listen(1801,function(){
    console.log('Server Bound');
});