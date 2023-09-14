const express = require("express");

const urouter = express.Router();

urouter.get("/users");

urouter.post();

urouter.put();

urouter.delete();

module.exports = urouter;