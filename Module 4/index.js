// const express=require('express')
// const server=express();
// const Exsession=require('express-session')



// //synatx 
// /*


// server.get("routes","handler")

// handler -middleware /function (req res)


// */

// server.use(function(req,res,next){
//     console.log("hello world")
  
//     next()
    
// })

// server.use(Exsession({
//     secret: 'some key',
//     resave: false,
//     saveUninitialized: false,
 
// }))






// server.get('/admin',function(req,res){
//     res.send("server chalu hogya dice academy vikas ")
    

// })

// server.get('/edit',function(req,res){
//     res.send("edit data page data")
// })






// server.get('/user',function(req,res){
//     res.send("user data page ")
// })

// server.get('/test',function(req,res,next){
//     res.send.vikas=true;
//     res.send("i am done")
    

// })









// /*middleware -

// browser -client - get request - server - {--modification , check}-- middle ware 

// middleware - req , res , next

// cookies - data brwoser 
// session-data server 






// */

// // server.get("routes","middleware")
// server.get("admin/admindata",function(req,res,next){
//     res.send("some user data from admin page ")
//     next()
// })


// server.get("*",function(req,res){
//     res.send("no page found")
// })



// server.listen(3000)




























// // const express = require('express')
// // const app = express()
// // const port = 3000

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })