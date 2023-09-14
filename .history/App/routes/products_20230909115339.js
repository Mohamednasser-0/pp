const express = require("express");

const prouter = express.Router();

const products = []

prouter.get("/",(req,res) =>{
    res.send(products)
});

prouter.post("/", (req,res) =>{
    const body = req.body;
    products.push

});

prouter.put("/:id");

prouter.delete("/:id");

module.exports = prouter;