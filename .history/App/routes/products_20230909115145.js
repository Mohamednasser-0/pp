const express = require("express");

const prouter = express.Router();

prouter.get("/",(req,res) =>{
    res.send(p)
});

prouter.post("/");

prouter.put("/:id");

prouter.delete("/:id");

module.exports = prouter;