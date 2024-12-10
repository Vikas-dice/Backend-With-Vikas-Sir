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
server.listen(5000,()=>{
    console.log("server started ")



    // setInterval(() => {
    //     io.on('connection',()=>{
    //         console.log("a user connected")
    //     })
        
    // }, 2000);
})


io.on('connection',(socket)=>{
    console.log("user connected")

    setInterval(() => {
        socket.emit("event-from-server")
        
    }, 2000);
})
