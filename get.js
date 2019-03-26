var express = require('express');
var path = require('path');

var app = express();

app.get('/',function(req , resp){
    //resp.end(JSON.stringify(req.query));
     var responce = "hello !" + req.query.first;
     resp.end(responce); 
});
 

 

 app.listen(1802, function(){
    console.log('Listen port :1802')
})