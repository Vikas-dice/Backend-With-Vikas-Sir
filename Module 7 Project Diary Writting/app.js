

const express=require('express')
const app=express()

const filesystem=require('fs')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/create',function(req,res){


    var date = new Date();
var finaldate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;


    filesystem.writeFile( `./Files/${finaldate}.txt`,"hello world",function(err){
        if(err){
            res.send("kuch fatt gya ")
        }else{
            res.send("file creation done ")
        }
    })
    


})


app.get('/read',function(req,res){

    filesystem.readdir(`./Files`,"utf-8",function(err,data){
        if(err){
            res.send("something went wrong")
        }else{
            console.log("filessss",data)
            res.render('index',{data})
        }
    })


    // res.send("working fine")
})

app.get('/readfiledata/:filename',function(req,res){


    filesystem.readFile(`./Files/${req.params.filename}.txt`,"utf-8",function(err,data2){
        if(err){
            res.send("something fishy")
        }else{
            console.log("datatttttt",data2)

            res.render('index2',{data2})

        }
    })
})

app.listen(3000)
