const express = require("express");
const mongoose = require("mongoose");
const userrouter = require("./routes/user")
const {ConnectionHandler} = require ("./connection");


const app = express();
const PORT= 300;
app.use(express.urlencoded({extended:false}));
//connection 

ConnectionHandler("mongodb://localhost:27017/").then (console.log("mongodb connected"))
//routes
app.use("/user",userrouter);




app.listen(PORT,()=>{
    return("server started")
});
