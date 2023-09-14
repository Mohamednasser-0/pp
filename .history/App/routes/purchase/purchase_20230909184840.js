const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();

purrouter.put("/:id",authorize,async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const purprd = await product.find(id);
   const usr = await User.find({name:use})

   res.send(uppur);
});




module.exports = purrouter;