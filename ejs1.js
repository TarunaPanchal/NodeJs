var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('view engine' ,'ejs');


app.get('/', function(req , resp){
    resp.render('index');
})

app.listen(1612, function(){
  
    console.log("Listing port 1612");
})