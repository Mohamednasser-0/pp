const express = require("express");
const product = require ("../schemas/productsdb");

const prouter = express.Router();



prouter.get("/",async (req,res) =>{
    const products = await product.find({});
    res.send(products)
});

prouter.post("/", (req,res) =>{
    const body = req.body;
    const 
    products.push(body);
    res.send(products)

});

prouter.put("/:id");

prouter.delete("/:id");

module.exports = prouter;