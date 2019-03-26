// Import required packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

 
const v = require('./validation');
 // Routes

app.post('/validateMe', function(req,res){
    console.log(req.body);
    res.sendStatus(200);
})

//  app.post('/validateMe', v.validateMeChecks, function(req, res) { 
//     console.log(req.body);
//     res.sendStatus(200);
// });

// Launch App
app.listen(3000, function(req, res){
   console.log('Server is running on 3000');
});