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
    res.send()

});

prouter.put("/:id");

prouter.delete("/:id");

module.exports = prouter;