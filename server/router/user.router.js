var express = require("express");
var controller = require("../controller/user.controller");
var app = express.Router();
// var {jawth} = require("../middleware/auth");

app.post("/order",controller.Order);

module.exports=app;