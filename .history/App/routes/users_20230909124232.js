const express = require("express");
const User = require ("../schemas/usersdb");

const urouter = express.Router();

urouter.get("/");

urouter.post("/");

urouter.put("/:id");

urouter.delete("/users/:id");

module.exports = urouter;