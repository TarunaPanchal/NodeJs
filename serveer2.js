var http = require('http');
var server = http.createServer(fun);

server.listen(1801, function(){
     console.log('Server Request');
});


function fun(request , response) {

    response.writeHead(200, {'content-type' : 'text/plain'});

    response.end(' Hello..!  Server: Request Page : '+ request.url);
}