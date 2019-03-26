var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var User = require('./model');

app.post('/signup', function(req, res) {
   bcrypt.hash(req.body.password, 10, function(err, hash){
      if(err) {
         return res.status(500).json({
            error: err
         });
      }
      else {
         const user = new User({
            _id: new  mongoose.Types.ObjectId(),
            name: req.body.name,
            age : req.body.age,
            email: req.body.email,
            password: hash//req.body.password   
         });
         user.save().then(function(result) {
            console.log(result);
            res.status(200).json({
               success: 'User created'
            });
         }).catch(error => {
            res.status(500).json({
               error: err   
            });
         });
      }
   });
});

app.post('/signin', function(req, res){
    User.findOne({email: req.body.email})
    .exec()
    .then(function(user) {
       bcrypt.compare(req.body.password, user.password, function(err, result){
          if(err) {
             return res.status(401).json({
                failed: 'Unauthorized Access'
             });
          }
          if(result) {
            const JWTToken = jwt.sign({
                 email: user.email,
                 _id: user._id  
               },
               'secret',
                {
                  expiresIn: '2h'
                });
                return res.status(200).json({
                  success: 'Welcome to the JWT Auth',
                  token: JWTToken
                });
           }
       });
    })
    .catch(error => {
       res.status(500).json({
          error: error
       });
    });;
 });
 
 app.get('/Detail', (req, res) => {
    User.find({}, function (err, regi) {
        if (err) {
            res.send("Error to find detail");
            next();
        }
        res.json(regi);
    })
})
module.exports = app;
