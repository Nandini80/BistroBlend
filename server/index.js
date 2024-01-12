var express = require("express");
var moongose = require("mongoose");
var cors = require("cors");
var userrouter = require("./router/user.router");
var bp = require("body-parser");

var app = express();
var env = require("dotenv");
app.use("/uploads",express.static("uploads"));

var fileupload = require("express-fileupload");
app.use(fileupload());
env.config();

app.use(cors());
app.use(bp.urlencoded({extended:true}));
app.listen(2001,()=>{
    console.log("  SERVER STARTED   ");
});

var config = require("./config/db");
const dburl = config.dburl;

var dbConfig = moongose.connect(dburl).then(()=>{
    console.log("*******Connected********");
}).catch((err)=>{
    console.log("****"+err.toString());
    process.exit();
})

app.use(express.json({extended:true}));
app.use("/user",userrouter);
