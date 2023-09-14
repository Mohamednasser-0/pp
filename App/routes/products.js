const express = require("express");
const product = require ("../schemas/productsdb");


const prouter = express.Router();



prouter.get("/",async (req,res) =>{
    const products = await product.find({});
    res.send(products)
});

prouter.post("/", (req,res) =>{
    const body = req.body;
    const newprd = new product({
        title:body.title,
        price:body.price,
        rating:body.rating,
        number_of_stocks:body.number_of_stocks
    });
    newprd.save();
    res.send(newprd);
});

prouter.put("/:id",async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const upprd = await product.findByIdAndUpdate({_id:id},{...body},{new:true});
   res.send(upprd);
});

prouter.delete("/:id",async(req,res) =>{
    const id = req.params.id;
    const body = req.body;

    
    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const dlprd = await product.findByIdAndDelete(id);
   res.send(dlprd);
});

module.exports = prouter;