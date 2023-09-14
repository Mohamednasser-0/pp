const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
m

app.listen(PORT, () =>{
    console.log('Server is running on port ' + PORT)
})