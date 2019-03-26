var server = require('http');

server.createServer(fun).listen(1801);

function fun(request , response) {
    response.writeHead(200, {'content-type' : 'text/plain'});

    response.end(' Hello..!  Server ');
}