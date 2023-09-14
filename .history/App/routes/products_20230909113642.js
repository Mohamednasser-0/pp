const express = require("express");

const prouter = express.Router();

prouter.get("/products");

prouter.post("/products");

prouter.put("/products");

prouter.delete("/products");

module.exports = prouter;