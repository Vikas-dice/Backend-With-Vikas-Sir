const express=require('express')
const app=express();
const http = require('http');
const server = http.createServer(app);
const socketio=require('socket.io')
const io=socketio(server)

const path = require('path');
app.use(express.static(path.join(__dirname, 'FE')));

app.get('/',(req,res)=>{
    res.send("learning real time full suplex chat application using socket io built on websocket protocols")
})
server.listen(3000,()=>{
    console.log("server started ")



    // setInterval(() => {
    //     io.on('connection',()=>{
    //         console.log("a user connected")
    //     })
        
    // }, 2000);
})


// io.on('connection',(socket)=>{
//     console.log("user connected")

//     // setInterval(() => {
//     //     socket.emit("event-from-server")//publish
        
//     // }, 2000);


//     // setInterval(() => {
//     //     socket.emit("vikas-msg-event")//publish
//     //     console.log("msg from vikas side ")


        
//     // }, 5000);

//     socket.emit('dice-msg-side',{
//         msg:"my first msg to you"
//     })

// })


//listen

// io.on("msg-from-student",(data)=>{
//     console.log("student side msg",data)

//     const div=document.createElement("div")
//     div.innerText="msg from student side "
//     document.body.append(div)


// })






// io.on('connection',()=>{
//     console.log("user connected")

//     //listen - student lki side wala event 

   
// })

// io.on('msg-from-student',(data)=>{
//     console.log("coming data",data)
//     const div=document.createElement("div")
//     div.innerText="hellooo"
//     document.body.append(div)

// })


io.on('connection',(socket)=>{
    console.log("user connected ")

    socket.on('msg-from-students',(data)=>{
        console.log("hey")
        console.log(data)

    })

  socket.on('msg-from-vikas',(data)=>{
    io.emit('msg-from-vikas', {
        msg: "Hello from Vikas",
    });

  })
})

