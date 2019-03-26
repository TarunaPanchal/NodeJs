var  express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user = require('./router');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwtdb');

app.use(bodyParser.json());

app.get("/check",function(req,res){
      res.send("hello");
})

app.use('/user',user);

app.listen(2000,function(){
    console.log('Server running 2000');
})