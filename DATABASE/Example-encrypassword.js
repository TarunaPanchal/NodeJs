// var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');
// var SALT_WORK_FACTOR = 10;
// mongoose.connect('mongodb://localhost/Password');

// var db = mongoose.connection;

// db.on('error', function(err){
//     console.log('connection error', err);
// });

// db.once('open', function(){
//     console.log('Connection to DB successful');
// });

// var Schema = mongoose.Schema;
// var mySchema = new Schema({
//     name:String,
//     password:String
// });

// var User = mongoose.model('User', mySchema);

// mySchema.pre('save', function(next){
//     var user = this;
//     if (!user.isModified('password')) return next();

//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
//         if(err) return next(err);

//         bcrypt.hash(user.password, salt, function(err, hash){
//             if(err) return next(err);

//             user.password = hash;
//             next();
//         });
//     });
// });

// var testdata = new  User({
//     name: "admin",
//    password: "test123"
// });

// testdata.save(function(err, data){
//     if(err) console.log(err);
//     else console.log ('Sucess:' , data);
// });


var mg = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_FACTOR = 10;
mg.connect('mongodb://localhost/en');

var db = mg.connection;

db.on('error', function(err){
  console.log('error', err);
});

db.once('open', function(){
  console.log('Connection successful');
});

var Schema = mg.Schema;
var mySchema = new Schema({
  name:String,
  password:String
});

var User = mg.model('User', mySchema);

mySchema.pre('save', function(next){
  var user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt){
    if(err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });
});

var testdata = new  User({
  name: "root",
  password: "123456"
});

testdata.save(function(err, data){
  if(err) console.log(err);
  else console.log ('WOHOO:' , data);
});