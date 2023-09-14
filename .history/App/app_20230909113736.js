 require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const


const PORT = process.env.PORT || 3000;
const app = express();
mongoose
.connect(process.env.CONNECTION_STRING,{})
.then(() =>{
    console.log("MongoDB is running")
})
.catch((e) =>{
    console.log(e);
})

app.listen(PORT, () =>{
    console.log('Server is running on port ' + PORT)
})
