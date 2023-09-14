const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name: {type:String, required:true},
    age: {type:int, required:true},
    email: {type:String, required:true},
    purchased_products: {type:String, required:true}
})