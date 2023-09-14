const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name: {type:String, required:true},
    age: {type:I, required:true},
    email: {type:String, required:true},
    purchased_products: {type:Array, required:true}
})