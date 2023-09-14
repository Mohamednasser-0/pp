const mongoose = require("mongoose");

const productschema = mongoose.Schema({
    name: {type:String, required:true},
    age: {type:Int32Array, required:true},
    email: {type:String, required:true},
    purchased_products: {type:Array, required:true}
})