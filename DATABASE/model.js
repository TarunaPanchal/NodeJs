console.log("Model File Running");
const mongoose = require('mongoose');
const schema  = mongoose.Schema;

const userSchema = new schema({

FirstName:{type:String,required:true},
LastName:{type:String},
Email:{type:String,required:true,unique:true},
Aage:{type:Number},
Gender:{type:String,enum:['Male','Female']},
createdTime:{type:Date,default:Date.now}

}) ;

module.exports = mongoose.model('details',userSchema);
