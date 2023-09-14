const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name: {type:String, required:true}
})