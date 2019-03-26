console.log("Student_add file running");
const model = require('./student_schema');
module.exports = {

    addstudent : function(req,res){

  var Model = new model(req.body);
  Model.save((err,data)=>{
     if(err)
          return res.json({code:400,message:"Error in add Student"})
     else
          return res.json({code:201,message:"Student Add successfully."})
     })
}
}