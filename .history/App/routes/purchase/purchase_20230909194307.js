const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();






purrouter.put("/:username/:prdid",async (req,res) =>{
    const username = req.params.username;
    const prdid = req.par
    res.send("working")
});




module.exports = purrouter;