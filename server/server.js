const http = require("http");
const fss = require("fs");
const express = require("express");

const server = http.createServer((req,res)=> {
    //console.log(req.url);
    
    //fss.appendFile("/text.txt","UTF-8",log)
    const log = `${Date.now()}: ${req.url}: new request recived \n`
    fss.appendFile("text.txt",log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("homepage")
                break;

            default:
                res.end("404")
                break;
        }
    })
    //res.end("cndwjdj");

});
server.listen(8000, ()=> console.log("server started"));