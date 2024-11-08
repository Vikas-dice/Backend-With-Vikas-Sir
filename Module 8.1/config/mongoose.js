

const mongoose =require('mongoose')

mongoose
.connect('mongodb+srv://testtestdice:Iphoneapple@testdicetest.yxdfz.mongodb.net/?retryWrites=true&w=majority&appName=testdicetest')
.then(function(){
    console.log("db connected")
})

const db=mongoose.connection;


module.exports=db;
