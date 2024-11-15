const express =require('express')
const app=express()

const jwt=require('jsonwebtoken')

const bcrypt=require('bcrypt')
const cookieParser=require('cookie-parser');

app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("testing ")
})

app.post('/createpassword',async(req,res)=>{
  let salt= await bcrypt.genSalt()

  let encryptedpass=await bcrypt.hash("lobyou",salt)


//   console.log(salt)




    res.send(encryptedpass)
})

app.get("/tokengen",async (req,res)=>{

   const token= await jwt.sign({name:"vikas"},"lobyou")

   res.send(token)



    
})
app.get('/tokenpdhna',async(req,res)=>{
try{
    const maal= await jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmlrYXMiLCJpYXQiOjE3MzE2NTcxMjB9.wuwnwuwCwvu9R-F_EU9aGuKirUNMLru6ZP9K3y1PZeo","lobyou")
    res.send(maal)

}catch(err){
    res.send("kuch to gadbad h bhai")
}
 

   

})
app.get('/createCookie',(req,res)=>{
    res.cookie("name","chaudhary",{
        // maxAge:10000
        httpOnly:true
    })
   



    res.send("createdcookie done")
})
app.get("/readCookie",(req,res)=>{
    res.send(req.cookies.name)

   
})

app.listen(3000)
