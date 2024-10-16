
const express=require('express');
const session = require('express-session');
const server=express();
const Esession = require('express-session');


// server.get("routes","middleware-function - req res next")

server.use(Esession({
    secret:"some secret",
    resave:false,
    saveUninitialized: false,
}))


server.get("/",function(req,res,next){
    res.send("server started")

})

server.get("/admin",function(req,res,next){
    res.send("admin page data")
})

server.get("/user",function(req,res,next){
    // Session.vikas=true;
    req.session.vikas=true;
    res.send("user page data")

})

server.get("/create",function(req,res,next){
console.log("hello world")
    // console.log(Esession.Session.vikas);
    console.log(req.session.vikas) //dice
    res.send("some thing created by vikas  ")
})

server.get("*",function(req,res,next){
    res.send("no page found")
})

server.listen(2000)

