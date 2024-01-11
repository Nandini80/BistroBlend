var mongoose = require("mongoose");
function GetReactUserschema() {
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: { type: String, required: true, unique: true, index: true }, //For unique id
        tableNumber: {type : Number},
        food: { type: [String], default: [] },
        payment:String,
    }, {
        versionKey: false
    });

    var userColRef = mongoose.model("userschema", colSchema);
    return userColRef;
};
module.exports = GetReactUserschema;