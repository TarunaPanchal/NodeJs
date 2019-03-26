console.log("School_Schema File Running");
const mongoose = require('mongoose');
const schema  = mongoose.Schema;

const schoolschema = new schema({
    // _id: {
    //     type: Number,
    //     unique: true
    // },
    SchoolName:{type:String,required:true,unique:true}

}) ;

// const studentschema = new schema({
// StudentName:{type:String,required:true},
// Std : {type:Number,required:true},
// Gender:{type:String,enum:['Girl','Boy']},
// School_name :[{type:schema.Types.ObjectId, ref: 'school_detail'}]
// });

module.exports = mongoose.model('school_detail',schoolschema);

// module.exports = mongoose.model('student_detail',studentschema);
