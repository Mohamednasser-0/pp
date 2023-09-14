const express = require("express");
const mongoose = require("mon")

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () =>{
    console.log('Server is running on port ' + PORT)
})