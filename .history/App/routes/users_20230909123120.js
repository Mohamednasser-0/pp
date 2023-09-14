const express = require("express");
const  = require ("../schemas/usersdb");

const urouter = express.Router();

urouter.get("/users");

urouter.post("/users");

urouter.put("/users/:id");

urouter.delete("/users/:id");

module.exports = urouter;