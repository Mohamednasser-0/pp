const express = require("express");
const product = require ("../schemas/productsdb");
const User = require ("../schemas/usersdb");

const purrouter = express.Router();

purrouter.put("/:id",async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const uppur = await product.findByIdAndUpdate({_id:id},{...body},{new:true});
   res.send(uppur);
});

module.exports = purrouter;