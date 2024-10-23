const express=require('express')
const app=express()

//middleware app.use(ejs)



//error handling - apps crash , function dikkat aagyi (req res cycle )

app.get('/home',function(req,res,next){
    res.send("server chalu")
    next(err);
   
})

app.get('/admin',function(req,res,next){
    res.send("admin page chalu")
    // next(err)
    next(err)
})
app.get('/profile',function(req,res,next){
    try {
        res.sennd("profile page chalu")
    } catch (error) {
        next(error)
        
    }
    // res.send("profile page chalu")
})


app.get("*",function(req,res,next){
    res.send("no page found")

})

app.use((err,req,res,next)=>{
    res.status(500).send(err.message);
})

app.listen(5000)



