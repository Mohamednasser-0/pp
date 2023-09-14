const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
mongoose.connect("mongodb://localhost:27017/Mini-project",{},() =>{
    console.log("Mon")
})

app.listen(PORT, () =>{
    console.log('Server is running on port ' + PORT)
})