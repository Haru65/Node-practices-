const http = require("http");
const express = require("express");

const app = express();

app.get("/",(req,res)=> {
return res.send("hello from root page" + req.query.name ) });


app.listen(8000,()=> {console.log("server started")})
/*const url = require("url");
const fs = require("fs")

/*
const myserver = http.createServer(/*call backfunction in arrow (req,res) =>{
    const log = `${Date.now()} :  new req rec ${req.url}\n `
    if(req.url === "/fevicon.ico" ) return res.end();
    //fs.appendFile("file.txt",log)
    fs.appendFileSync("file.txt", log)

    switch(req.url){
        case "/":
            res.end("hello this is homepage");
            break;
        case "/about":
            res.end("this is about")
            break;

        case "/search":
                const result = myurl.query.search_query;
                res.end("here is ur result " + result)
                break;
        default:
                res.end("404");
                break;
        }
    


   
})

myserver.listen(8000 , console.log("server staRTED"))
*/

