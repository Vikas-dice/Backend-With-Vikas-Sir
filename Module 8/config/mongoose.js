const mongoose=require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/mytestdb');
// mongoose.connect('mongodb+srv://vikas:Iphone15apple@dicetest.fcwa6.mongodb.net/?retryWrites=true&w=majority&appName=dicetest');


mongoose.connect('mongodb+srv://vikas:Iphone15apple@dicetest.fcwa6.mongodb.net/?retryWrites=true&w=majority&appName=dicetest')


const db=mongoose.connection;

db.on("error",function(err){
    console.log("test error")
    console.log(err)
})

db.on("open",function(){
    console.log("connect mongodb ")
})

module.exports=db;


