const express = require("express");

const urouter = express.Router();

urouter.get("/users");

urouter.post("/users");

urouter.put("/users");

urouter.delete();

module.exports = urouter;