const express = require("express");
const Product = require ("../schemas/productsdb");

const prouter = express.Router();



prouter.get("/",async (req,res) =>{
    const prd = Product.find({});
    res.send(prd)
});

prouter.post("/", (req,res) =>{
    const body = req.body;
    const newprd = new Product({
        title: body.title,
    price: body.price,
    rating: body.rating,
    number_of_stocks: body.number_of_stocks
    });
    res.send(n)

});

prouter.put("/:id");

prouter.delete("/:id");

module.exports = prouter;