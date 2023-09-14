const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: {type:String, required:true},
    age: {type:Int32Array, required:true},
    email: {type:String, required:true},
    purchased_products: {type:Array, required:true}
})

const User = mongoose.model("user",userschema);

