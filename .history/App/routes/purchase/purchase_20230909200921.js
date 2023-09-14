const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();


purrouter.put("/:username/:prdid",async (req,res) =>{
    const {username, prdid} = req.params;
    const prd = await product.find({_id:prdid});
    const newpurchase = await User.findOneAndUpdate({_id:username},{$addToSet:{purchased_products:prd}},{new:true});
    const newprd = await product.findByIdAndUpdate({_id:prdid},{number_of_pro})
    res.send(newpurchase);
});




module.exports = purrouter;