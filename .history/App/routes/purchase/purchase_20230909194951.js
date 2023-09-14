const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();


purrouter.put("/:username/:prdid",async (req,res) =>{
    const {username, prdid} = req.params;
    const prd = await product.findOneAndUpdate({_id:prdid},{num});
    const newpurchase = await User.findOneAndUpdate({name:username},{})
});




module.exports = purrouter;