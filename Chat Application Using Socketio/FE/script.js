var socket = io();

const btn=document.getElementById("btn")


btn.onclick=function(){
 
        socket.emit("event-from-client")
        const div2=document.createElement("div")
        div2.innerText="msg coming from CLINET"
        document.body.append(div2)
}





socket.on('event-from-server',(maal)=>{
    console.log(maal)

    const div =document.createElement("div")
    div.innerHTML="some thing coming from server"
    document.body.append(div)

})


