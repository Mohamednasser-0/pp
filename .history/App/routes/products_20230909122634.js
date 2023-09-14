const express = require("express");
const usrdb = require ("../schemas/usersdb");

const prouter = express.Router();

const products = []

prouter.get("/",(req,res) =>{
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