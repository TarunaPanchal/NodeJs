var express = require('express');
var cookiep = require('cookie-parser');

var app = express();
app.use(cookiep());

app.get('/', function(request , response){
    response.cookie('cookieFirst','Hey Cookie');
    response.end('Bye Cookie');
});

app.get('/removecookie', function(request , response){
    response.clearCookie('cookieFirst');
    response.end('Bye Cookie');
});


app.listen(1801 , function(){
    console.log("Star");
})