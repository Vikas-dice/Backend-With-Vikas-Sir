


const filesystem = require('fs');

//write 

// filesystem.writeFile("file ka naam","option","callback")
// filesystem.writeFile("abc.txt","hey i am learning backend",function(err){
//     if(err){
//         console.log("some error",err);
        
//     }else{
//         console.log("file created successfully")
//     }
// })

//read file


// filesystem.readFile("abc.txt",'utf-8',function(err,data){
//     if(err){
//         console.log("some error",err)
//     }else{
//         console.log(data)
//     }
// })

// filesystem.appendFile('abc.txt',"hello dice",function(err,data){
//     if(err){
//         console.log("some errors",err)
//     }else{
//         console.log("data appended ")
//         console.log(data);
        
//     }
// })

// filesystem.unlink('abc.txt',function(err){
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file deleted saccesfully");
        
//     }
// })

// filesystem.writeFile("abc.txt","hello dice",function(err){
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file created sucessfully");
        
//     }
// })

// filesystem.rename("abc.txt","xyz.txt",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file renamed succesfully")
//     }
// })

// filesystem.readFile("xyz.txt",'utf-8',function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


//file content update 
//new folder created
//new folder rename 

//folder create 




// filesystem.mkdir("Photos",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("folder created ")
//     }
// })

// filesystem.rmdir("Photos",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("deleted folder sucessfully")
//     }

// })

// filesystem.mkdir("Photos",(err)=>{
//     if(err) console.log("err")
//         else{
//     console.log("folder created successfully")
//     }
// })

// filesystem.rmdir("Photos",{recursive:true},function(err){
//     if(err) console.log(err)
//         else{
//     console.log("folder deleted sucessfully")
    
//         }
// })

//FOLDER READ 

// filesystem.mkdir("Photos",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("folder craeted sucessfully")
//     }
// })

filesystem.readdir("Photos",{withFileTypes :true},function(err,maal){
    if(err){
        console.log(err)
    }else{
        console.log(maal)
    }
})
