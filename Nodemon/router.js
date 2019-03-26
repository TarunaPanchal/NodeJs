var express = require('express');
var app = express();
 var router = express.Router();

 app.use('/firstroute',router);

router.get('/heyfirstrouter', function(request , response){

    response.end('hiiii hello router');
});

router.get('/heyfirstrouteragain', function(request , response){

    response.end('hiiii hello again router');
});

app.listen(1802 , function(){
    console.log("Star");
})