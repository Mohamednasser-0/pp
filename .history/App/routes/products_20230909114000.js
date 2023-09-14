const express = require("express");

const prouter = express.Router();

prouter.get("/");

prouter.post("/");

prouter.put("/:id");

prouter.delete("/products/:id");

module.exports = prouter;