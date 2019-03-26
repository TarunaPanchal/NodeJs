var express = require('express');
var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');

app.use(cookieParser());
app.use(session({
    secret :'secret1',
    saveUninitialized :true,
    resave :true
}));

app.use(flash());

app.get('/',function(req , resp){
   resp.send("Connect-Flash Example");
});

app.get('/Message',function(req , resp){
    req.flash('msg',"This is Message ");
    resp.send("Connect-Flash Message");
   // resp.redirect('/Flash');
 });

 app.get('/Flash',function(req , resp){
    resp.send(req.flash('msg')); // This  is Message
 });


app.listen(2002,function(req,resp){
    console.log("Server is Running 2002");
});