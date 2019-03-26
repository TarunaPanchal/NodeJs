var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World 123 123 cheking');
})

// var server = app.listen(1801, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })
app.listen(1801 , function(){
   console.log("Listening port 1801");
})