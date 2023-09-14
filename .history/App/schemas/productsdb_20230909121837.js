const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    title: {type:String, required:true},
    price: {type:Int32Array, required:true},
    rating: {type:Int32Array, required:true},
    number_of_stocks: {type:Int32Array, required:true}
})

const User = mongoose.model("user")