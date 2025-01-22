const user = require("../models/schema")

async function  GetAllUser(req,res){
    const dbuser = await user.find({})
    return res.json(dbuser)

}

module.exports= {
    GetAllUser
}