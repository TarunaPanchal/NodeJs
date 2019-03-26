/*var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();

app.use(sessions({
    secret: 'dgfu@#$nfrih@#',
    resave: false ,
    saveUninitialized: false
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/login',function(req , resp){
    session = req.session;
     if(session.uniqueID){
       resp.redirect('/redirects');
   }
    resp.sendFile('index.html', {root: __dirname}); 
});

app.post('/login',function(req , resp){
   // resp.end(JSON.stringify(req.body));
   session = req.session;
   if(session.uniqueID){
       resp.redirect('/redirects');
   }
    if(req.body.username == 'admin' && req.body.password == 'admin'){
        req.session.uniqueID = req.body.username;
    }
    else{
        req.session.uniqueID = req.body.username;
    }
    request.session.save();
    resp.redirect('/redirects');
    
});

app.get('/logout',function(req , resp){
     req.session.destroy();
     resp.redirect('/login');
});
app.get('/admin',function(req ,resp)
{
    if(session.uniqueID != 'admin')
    {        
        resp.end('Unauthorized access');
    }
    resp.send('you are the god !! <a href="/logout">KILL SESSION </a>');
})

app.get('/redirects',function(req , resp){
    session = req.session;
    if(session.uniqueID == 'admin'){
        console.log(session.uniqueID);
        resp.redirect('/admin');
    } else {
        resp.send( req.session.uniqueID + ' <a href="/logout"> Kill session </a>');
    }
});

 app.listen(1816, function() {
    console.log('Listen port :1816');
});*/

var express = require('express');
var bodyParser = require('body-parser');
var sessions= require('express-session');

var session;

var app = express();



app.use(sessions({
    secret : '$#^$#rge@#$3453@$%@#$',
    resave : false,
    saveUninitialized: false

}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/login',function(request,resp)
{
    session = request.session;
    if(session.uniqueID)
    {
       
        resp.redirect('/redirects');
    }
    resp.sendFile('index.html',{root:__dirname});
});

app.post('/login',function(request,resp)
{
    //resp.end(JSON.stringify(request.body));
    session = request.session;
    if(session.uniqueID)
    {
         resp.redirect('/redirects');
    }
    if(request.body.username == 'admin' && request.body.password == 'admin')
    {
       request.session.uniqueID=request.body.username;
    }
    else
    {
        request.session.uniqueID=request.body.username;
    }
    // request.session.test='test';
     request.session.save();
    resp.redirect('/redirects');

});

app.get('/logout',function(request,resp)
{
    request.session.destroy();
    resp.redirect('/login');
}); 

app.get('/admin',function(request,resp)
{
    if(session.uniqueID != 'admin')
    {
        
        resp.end('Unauthorized access');
    }
    resp.send('you are the god !! <a href="/logout">KILL SESSION </a>');
})

app.get('/redirects',function(request,resp)
{
    session = request.session;
  //  console.log(session);
    if(session.uniqueID == 'admin')
    {
        
        resp.redirect('/admin');
    }
    else
    {
       
        resp.send(request.session.uniqueID + ' : Who are you?? <a href="/logout">KILL SESSION </a>');
    }
});


app.listen(1234,function()
{
    console.log('Listening at port 1234');
});