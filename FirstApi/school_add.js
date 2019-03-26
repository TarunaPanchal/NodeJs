console.log("School_add file running");
const model = require('./school_schema');
module.exports = {
    addschool : function(req,res){

  var Model = new model(req.body);
  Model.save((err,data)=>{
     if(err)
          return res.json({code:400,message:"Error in add School"})
     else
          return res.json({code:201,message:"School Add successfully."})
     })
}
}