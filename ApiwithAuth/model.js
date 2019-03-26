var mongoose = require('mongoose');

var user = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,require:true},
    age:{type:Number,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
});

module.exports = mongoose.model('User',user);