/*var express =  require('express');
var path = require('path');
var app = express();

app.get('/',function(req , resp){
   resp.sendFile('index.htm',{root: path.join(__dirname)});
});

app.listen(1801, function(){
    console.log('Listen port :1801')
})*/

var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.get('/',function(req , resp){
    resp.sendFile('index.html',{root: path.join(__dirname,'./Files')});
 
 });
 

 app.get(/^(.+)$/,function(req , resp){
   // console.log("working");
    //  console.log(path.join(__dirname,'./Files',req.param[0]+'.html'));
     try{
         
         if(fs.statSync(path.join(__dirname,'./Files/',req.params[0]+'.html')).isFile()){
            resp.sendFile(req.params[0]+'.html',{root: path.join(__dirname,'./Files')});
         }
     }catch(error){
         console.log(error);
     resp.sendFile('404.html',{root: path.join(__dirname,'./Files')});
      }
 });

 app.listen(1801, function(){
    console.log('Listen port :1801')
})