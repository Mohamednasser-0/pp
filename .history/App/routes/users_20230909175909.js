const express = require("express");
const User = require ("../schemas/usersdb");

const urouter = express.Router();

urouter.get("/",async (req,res) =>{
    const user = await User.find({});
    res.send(user)
});

urouter.post("/", (req,res) =>{
    const body = req.body;
    const newusr = new User({
        name:body.name,
        age:body.age,
        email:body.email,
        purchased_products:body.purchased_products
    });
    newusr.save();
    res.send(newusr);
});

urouter.put("/:id",async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const upprd = await User.findByIdAndUpdate({_id:id},{...body},{new:true});
   res.send(upusr);
});

urouter.delete("/:id",async(req,res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!id){
        res.send({error:true, messege:"id not found"})
        return;
    }

   const dlusr = await User.findByIdAndDelete(id);
   res.send(dlusr);
});

module.exports = urouter;