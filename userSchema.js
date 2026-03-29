const mongos = require("mongoose");
const userSchema = new mongos.Schema({

    // -----------normal way to create schema
    // fullname : String,
    // email : String,
    // password : String,
    // phone : Number  

    // -----------advance way to create schema
    fullname : {
        type : String,
        required : true 
    },
    email : {
        type : String,
        required : true,
        unique : true
    },  
    password : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    }




})

module.exports = mongos.model("user", userSchema);