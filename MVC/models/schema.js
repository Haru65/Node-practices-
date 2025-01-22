const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    job_title:{
        type:String
    }
});
const user = mongoose.model("user",userschema)

module.exports= user;