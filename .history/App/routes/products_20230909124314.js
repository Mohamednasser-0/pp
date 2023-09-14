const express = require("express");
const Product = require ("../schemas/productsdb");

const prouter = express.Router();

const products = []

prouter.get("/",async (req,res) =>{
    const prd = Product.find({});
    res.send(products)
});

prouter.post("/", (req,res) =>{
    const body = req.body;
    products.push(body);
    res.send(products)

});

prouter.put("/:id");

prouter.delete("/:id");

module.exports = prouter;