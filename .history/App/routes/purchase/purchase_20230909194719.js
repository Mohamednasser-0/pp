const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();


purrouter.put("/:username/:prdid",async (req,res) =>{
    const {username, prdid} = req.params;
    const prd = await p
    const newpurchase = await User.findOneAndUpdate({name:username},{purchased_products:})
});




module.exports = purrouter;