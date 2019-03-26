var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyp = require('body-parser');

var app = express();
app.use(bodyp());


app.get('/',function(req , resp){
    resp.sendFile('index.html',{root: path.join(__dirname,'./Files')});
    
});

app.post('/',function(req , resp){
    resp.end(JSON.stringify(req.body));
    
});
 

 

 app.listen(1801, function(){
    console.log('Listen port :1801')
});