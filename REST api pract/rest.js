const express = require("express");
const fs = require("fs")
const users = require("./MOCK_DATA.json");
const exp = require("constants");
const mongoose = require("mongoose");
const { type } = require("os");


mongoose.connect("mongodb://localhost:27017/root")
.then(()=> console.log("mongodb connected"))
.catch((err)=> console.log("error ",err))

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

const app = express();
const PORT= 300;
app.use(express.urlencoded({extended:false}));
app.get("/users",async(req,res) => {
    const DBUSERS = await user.find({});
const html = `<ul>
${
    DBUSERS.map(users => `<li> ${users.first_name} - ${users.Email}</li> ` ).join("")
}
</ul>` 

    return res.send(html) 

})

app.route("/api/users/:id").get(async(req,res) => {
    const id = req.params.id;
    const DBUSER = await user.find({})
    const users = DBUSER.find( users => users.first_name === id);
    return res.json(users)

}).patch(async(req,res)=>{
    const body = req.body;
   await user.findByIdAndUpdate(req.params.id,{last_name:body.last_name})
   return res.json(({message:"successful"}))
   //    const body = req.body;
   // console.log(body)
     //      users[user] = { ...users[user], ...body };
   // fs.writeFileSync("./MOCK_DATA.json",JSON.stringify(users),"utf-8");

}).delete(async(req,res)=>{
   /*const id = Number(req.params.id);
   const user = users.findIndex(users=> users.id === id);
   var deleteduser = users[user];
   users.splice(user,1)[0];
   fs.writeFileSync("./MOCK_DATA.json",JSON.stringify(users),"utf8");
   return res.json(deleteduser)*/

    await user.findByIdAndDelete(req.params.id,{})
    return res.json({message:"sucessful"})


})




app.post("/api/users",async(req,res)=>{
    const body = req.body;
    console.log(body)
   // users.push({...body,id:users.length+1})
    //fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
      //  return res.json({status:"pending"})
    // })
    const result = user.create({
        first_name: body.first_name,
        last_name: body.last_name,
        Email:body.email,
        job_title:body.job
    });
    return res.json({message:"sucessful"})
});


app.listen(PORT,()=>{
    return("server started")
});
