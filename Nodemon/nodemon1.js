var express = require('express');
var app = express();

app.get('/', function(request , response){

    response.end('hiiii hello');
});

app.listen(1801 , function(){
    console.log("Star");
})