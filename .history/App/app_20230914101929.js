 require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const usrrouter = require("./routes/users");
const prdrouter = require("./routes/products");
const purrouter = require("./routes/purchase/purchase");




const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({extende:true}));
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
app.use("/purchase",purrouter);
app.listen(PORT, () =>{
    console.log('Server is running on port ' + PORT)
})
