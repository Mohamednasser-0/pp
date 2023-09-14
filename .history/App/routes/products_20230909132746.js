const express = require("express");
const product = require ("../schemas/productsdb");

const prouter = express.Router();



prouter.get("/",async (req,res) =>{
    
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