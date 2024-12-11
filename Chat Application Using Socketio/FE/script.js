// var socket = io();

// const btn=document.getElementById("btn")


// btn.onclick=function(){
 
//         socket.emit("event-from-client")
//         const div2=document.createElement("div")
//         div2.innerText="msg coming from CLINET"
//         document.body.append(div2)
// }




//listen
// socket.on('event-from-server',(maal)=>{
//     console.log(maal)

//     const div =document.createElement("div")
//     div.innerHTML="some thing coming from server"
//     document.body.append(div)

// })

// socket.on("vikas-msg-event",(data)=>{
//     console.log(data)

//     const para=document.createElement("p")
//     para.innerText="msg coming from vikas side"
//     document.body.append(para)
// })



// const btn2=document.getElementById("btn2")
// btn2.onclick=function (){
//     //step 1 - event publish
//     socket.emit("msg-from-student")
//     console.log("i am running ")
//     const div=document.createElement("div")
//     div.innerText="dice msg"
//     document.body.append(div)

// }

// io.on('dice-msg-side',(data)=>{
//     console.log(data)

// })
var socket = io();
/*

2 way comm channel 

vikas ---student
vikas - publish -event - .emit
student -listen - on

student - publish - event -emit
vikas -listen -on

script.js --student side
index.js -vikas side 



*/

const btn=document.getElementById("sndmsg")
var input =document.getElementById("inp")
const msglist=document.getElementById("msglist")
const vikasbtn=document.getElementById("vikasbtn")

btn.onclick=function(){
    console.log("i am fired")
    //publish

    socket.emit('msg-from-students',{
        msg:input.value     
    })

    const litem=document.createElement('li')
    litem.innerText=input.value+"{from students}" ;
    msglist.append(litem)

  
}



vikasbtn.onclick=function(){
    console.log("fired vikas button")

    // socket.emit('msg-from-vikas')
    socket.emit('msg-from-vikas');
    
    


}

socket.on('msg-from-student',(data)=>{

    const litem = document.createElement('li');
    litem.innerText = data.msg + " {from student}";
    msglist.append(litem);

})
socket.on('msg-from-vikas',(data)=>{

    const litem = document.createElement('li');
    litem.innerText = data.msg + " {from vikas}";
    msglist.append(litem);

})

