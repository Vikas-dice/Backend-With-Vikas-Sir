/*
stp1 - bolb data

step 2- bolb data - json ()


photos



kuchh or photos






*/




// function getphotos(){

//     setTimeout(() => {
//         console.log("thodi si photos aagyi");
        
//     }, 2000);
    
// }

// function getmorephotos(){
//     setTimeout(() => {
//         console.log("thodi jyada photos aagyi");
        
//     }, 1200);
    
    
// }

// getphotos();
// getmorephotos();





/*

dice server - connect 
dice server - courses data lenge 
enroll krnge inke course 





*/

function connectToDiceServer(cbfn){
    console.log("connecting to server .....");
    setTimeout(() => {
        console.log("connected to dice server ");
        cbfn();
        
        
    }, 2000);
    
}


function fetchdicecourse(){
    
    
}
connectToDiceServer(function(){
    console.log("fetching dice course .....");

});
fetchdicecourse();




