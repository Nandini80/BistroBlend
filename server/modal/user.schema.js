var mongoose = require("mongoose");
function GetReactUserschema() {
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: { type: String, required: true, unique: true, index: true }, //For unique id
        name: {type:String},
        contact:{type : String},
        date : {type : Date},
        time : {type : Date},
        members: {type : String},
        feedback:{type : String},
    }, {
        versionKey: false
    });

    var userColRef = mongoose.model("orders", colSchema);
    return userColRef;
};
module.exports = GetReactUserschema;