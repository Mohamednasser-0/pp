const express = require("express");

const Port = process.env.Port
const app = express();

app.listen(3000, () =>{console.log("Server is running")})