const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();


purrouter.use(authorize);//middleware

const authorize = (req,res,next) =>{
    const {user} = req.query;

    if(User.find({name:user})){
        
        next();
    }
    else{
        res.status(401).send('Authentication Failed /Not a valid user/')
    }
}



purrouter.put("/:id",authorize,async (req,res) =>{
    res.send("working")
});




module.exports = purrouter;