const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
mongoose.connect("http://localhost:27017/Mini-project",{}).then(() =>{
    con
})

app.listen(PORT, () =>{
    console.log('Server is running on port ' + PORT)
})