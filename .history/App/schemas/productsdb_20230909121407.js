const mongoose = require("mongoose");

const productschema = mongoose.Schema({
    title: {type:String, required:true},
    price: {type:Int32Array, required:true},
    email: {type:String, required:true},
    purchased_products: {type:Array, required:true}
})