const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name: {type:String, required:true},
    age: {type:int, required:true},
    email: {type:String, required:true},
    : {type:String, required:true}
})