
// const h=require('http')

// //server bnaynge 
// console.log("hi");


// const server=h.createServer(function(req,res){

//     res.end("vikas chaudhary")


// })
// console.log("hello")



// server.listen(1111)


// console.log("bello")


const http=require('http')

const server=http.createServer(function(req,res){
    // console.log("------------------------")
    // console.log(req.url)
    // console.log("--------------------------")

    if(req.url==='/'){
        res.end("server chalu hogya vikas chaudhary  full stack deve   ")

    }else if(req.url==='/admin'){
        res.end("admin page  ")

    }else if(req.url==='/user'){
        res.end("user data  ")
    }
    
    else{
        res.end("page not found")

    }

   

})

server.listen(1212)

