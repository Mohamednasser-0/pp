const mongoose = require("mongoose");

const productschema = mongoose.Schema({
    title: {type:String, required:true},
    price: {type:Int32Array, required:true},
    rating: {type:Int, required:true},
    number_of_stocks: {type:Array, required:true}
})