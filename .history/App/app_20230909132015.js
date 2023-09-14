 require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser")
const mongoose = require("mongoose");
const usrrouter = require("./routes/users");
const prdrouter = require("./routes/products");



const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyparser.urlencoded({extende:true}));
app.use(express.json());
mongoose
.connect(process.env.CONNECTION_STRING,{})
.then(() =>{
    console.log("MongoDB is running")
})
.catch((e) =>{
    console.log(e);
})
app.use("/users", usrrouter);
app.use("/products", prdrouter);
app.listen(PORT, () =>{
    console.log('Server is running on port ' + PORT)
})
