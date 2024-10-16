const express=require('express');
const session = require('express-session');
const server=express();
const Esession = require('express-session');

const cookieParser = require('cookie-parser')

const flash = require('connect-flash');


server.use(flash());
server.use(cookieParser());

server.use(Esession({
    secret:"some key",
    resave:false,
    saveUninitialized:true,
}))


server.get('/',function(req,res,next){
    res.cookie("name","vikas")
    res.send("server started at port 5000")
})

server.get("/admin",function(req,res,next){
    res.send("admin page found")
    console.log(req.cookies.name)
})

server.get("/users",function(req,res,next){
    req.flash("error","invalid creadential")
    res.redirect('/error')
    // res.send("users data found")
})


server.get('/error',function(req,res,next){
    let errromsg=req.flash.error;

    console.log("---------fgvergverget---------")
    console.log(res.errromsg)

    res.send(errromsg)
    res.send("working finer ")
})
server.get('/contact',function(req,res,next){
    console.log("working fine")
    res.send("some thing ")
    // res.send(flash.error)
})

server.get("*",function(req,res,next){
    res.send("no page found")
})

server.listen(5000);
