const express = require("express");
const product = require ("../../schemas/productsdb");
const User = require ("../../schemas/usersdb");


const purrouter = express.Router();

purrouter.put("/:id/:id",authorize,async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const uppur = await product.findByIdAndUpdate({_id:id},{...body},{new:true});
   res.send(uppur);
});


//middleware

const authorize = (req,res,next) =>{
    const {user} = req.query;

    if(User.fi){
        next();
    }
    else{
        res.status(401).send('Authentication Failed /Not a valid user/')
    }
}


purrouter.use(authorize);

module.exports = purrouter;