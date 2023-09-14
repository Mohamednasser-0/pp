const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();


purrouter.put("/:username/:prdid",async (req,res) =>{
    const {username, prdid} = req.params;
    const prd = await product.find({_id:prdid});
    const newpurchase = await User.findOneAndUpdate({_},{$addToSet:{purchased_products:prd}},{new:true});
    res.send(newpurchase);
});




module.exports = purrouter;