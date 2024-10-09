

/*
async await 



async function name (){

task - time consuming 


}



*/
// console.log("backend course ");

// function fun(){
//     console.log("vikas chaudhary");
//     for(let i=1;i<=10000;i++){
//         console.log(i+3);
        
//     }

//     console.log("dice academy ");
    
    
// }

// console.log("some more random stuff");



// fun();


async function fun() {
    console.log("vikas");
    setTimeout(() => {
        console.log("chaudhary");
        
        
    }, 3000);

    setTimeout(()=>{
        for(let i=1;i<=100;i++){
            console.log(i);
            
        }

    },2000)


   let bolbdata=await fetch('https://randomuser.me/api/')
   let actualdata=await bolbdata.json();

   console.log(actualdata);
   
    
    
}

fun();


//