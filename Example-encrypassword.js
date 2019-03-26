var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var l = 10;
mongoose.connect('mongodb://localhost/password');

var db = mongoose.connection;

db.on('error', function(err){
    console.log('connection error', err);
});

db.once('open', function(){
    console.log('Connection to DB successful');
});

var Schema = mongoose.Schema;
var mySchema = new Schema({
    name:String,
    password:String
});

var User = mongoose.model('User', mySchema);

mySchema.pre('save', function(next){
    var user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(l, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

var testdata = new  User({
    name: "admin",
   password: "test123"
});

testdata.save(function(err, data){
    if(err) console.log(err);
    else console.log ('Sucess:' , data);
});