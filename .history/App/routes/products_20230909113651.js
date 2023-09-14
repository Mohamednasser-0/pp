const express = require("express");

const prouter = express.Router();

prouter.get("/products");

prouter.post("/products");

prouter.put("/products/:id");

prouter.delete("/products/:id");

module.exports = prouter;