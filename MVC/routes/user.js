const express = require("express");
const router = express.Router();
const user = require("../models/schema")
const { GetAllUser }= require("../controllers/controller")



router.get("/",GetAllUser)
router.route("/:id")
.get(async(req,res) => {
   

}).patch(async(req,res)=>{
    const body = req.body;
   await user.findByIdAndUpdate(req.params.id,{last_name:body.last_name})
   return res.json(({message:"successful"}))
 
}).delete(async(req,res)=>{
   await user.findByIdAndDelete(req.params.id,{})
    return res.json({message:"sucessful"})


})
router.post("/",async(req,res)=>{
    const body = req.body;
   
    const result = user.create({
        first_name: body.first_name,
        last_name: body.last_name,
        Email:body.email,
        job_title:body.job
    });
    return res.json({message:"sucessful"})
});


module.exports=
    router
