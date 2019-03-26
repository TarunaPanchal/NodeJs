console.log("User Action file running");
const model = require('./model');
module.exports = {

 createUser : function(req,res){

  var Model = new model(req.body);
  Model.save((err,data)=>{
     if(err)
          return res.json({code:400,message:"Error in creating new user"})
     else
          return res.json({code:201,message:"User created successfully."})
     })
}
}