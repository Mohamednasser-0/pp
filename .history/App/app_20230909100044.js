const express = require("express");

const Port = process.env.Port || 3000;
const app = express();

app.listen(port, () =>{console.log("Server is running")})