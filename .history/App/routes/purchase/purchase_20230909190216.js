const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();

//middleware

const authorize = (req,res,next) =>{
    const user = req.query;

    if(User.find({name:user})){
        
        next();
    }
    else{
        res.status(401).send('Authentication Failed /Not a valid user/')
    }
}


purrouter.use(authorize);

purrouter.put("/:id",authorize,async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const purprd = await product.find(id);
   const usr = await User.find({name:user})

   res.send(uppur);
});




module.exports = purrouter;