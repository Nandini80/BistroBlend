var userschema = require("../modal/user.schema");
var userColRef = userschema();
// var webtoken = require("jsonwebtoken");

async function Order(req,resp)
{ 
   var obj = new userColRef(req.body);
   await obj.save().then((obj)=>{
    resp.send("Information Saved");
   }).catch((err)=>{
    resp.send(err);
   });
}; 

module.exports ={Order};