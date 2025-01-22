const mongoose = require("mongoose");
const userschema = require("./models/schema.js")

async function  ConnectionHandler(url){
    return mongoose.connect(url)
 
    
}

module.exports ={ConnectionHandler}