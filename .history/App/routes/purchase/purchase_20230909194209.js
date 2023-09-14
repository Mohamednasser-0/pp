const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();






purrouter.put("/:",async (req,res) =>{
    res.send("working")
});




module.exports = purrouter;