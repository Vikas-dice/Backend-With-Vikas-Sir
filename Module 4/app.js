const express=require('express')
const server=express();
const cookieParser = require('cookie-parser')

const a=server.use(cookieParser())
// console.log(cookieParser)
console.log(a)


server.get('/',function(req,res){
    res.send("server started")
})
server.get('/admin',function(req,res,next){
    res.send("admin page found vikas chaudhary")

    // res.cookies ={
    //     name:"vikas",
    
    //     age:27
    // }
    next()

    res.cookie('name','vikas')
    console.log("hello world !",req.cookies)
    console.log(req.cookies.name)
    console.log(req.cookies.age)



    
})
// server.get("/admin/admindata",function(req,res){
//     res.send("admin data ")
//     // console.log(req.cookies.name)
//     // console.log(req.cookies.age)
    
// })

server.get("*",function(req,res){
    res.send("no page found")
})

server.listen(4000)

