const express = require("express");
const User = require ("../schemas/usersdb");

const urouter = express.Router();

urouter.get("/",async (req,res) =>{
    const user = await User.find({});
    res.send(user)
});

urouter.post("/", (req,res) =>{
    const body = req.body;
    const newprd = new User({
        name:body.name,
        age:body.age,
        email:body.email,
        purchased_products:body.number_of_stocks
    });
    newprd.save();
    res.send(newprd);
});

urouter.put("/:id",async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const upprd = await product.findByIdAndUpdate({_id:id},{...body},{new:true});
   res.send(upprd);
});

urouter.delete("/:id",async(req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const dlprd = await product.findByIdAndDelete(id);
   res.send(dlprd);
});

module.exports = urouter;