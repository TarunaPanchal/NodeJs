console.log("Student_Schema File Running");
const mongoose = require('mongoose');
const schema  = mongoose.Schema;
const  a = require('./school_schema');

const studentschema = new schema({
StudentName:{type:String,required:true},
Std : {type:Number,required:true},
Gender:{type:String,enum:['Girl','Boy']},
School_name :{type:schema.Types.ObjectId , ref: 'school_detail'}
});

module.exports = mongoose.model('student_detail',studentschema);