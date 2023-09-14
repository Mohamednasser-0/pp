const express = require("express");

const prouter = express.Router();

prouter.get("/products");

prouter.post("/products");

prouter.put();

prouter.delete();

module.exports = prouter;