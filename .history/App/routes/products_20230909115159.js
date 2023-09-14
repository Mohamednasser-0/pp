const express = require("express");

const prouter = express.Router();

const products = []

prouter.get("/",(req,res) =>{
    res.send(products)
});

prouter.post("/");

prouter.put("/:id");

prouter.delete("/:id");

module.exports = prouter;