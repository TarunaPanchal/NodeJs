var express = require('express');
var app = express();
 var router = express.Router();

 app.use('/users',router);

router.get('/:Name/:Field', function(request , response){ //('name(\\w+)') // use for validation

    response.end(JSON.stringify(request.params));
});

app.listen(1618 , function(){
    console.log("Star");
})