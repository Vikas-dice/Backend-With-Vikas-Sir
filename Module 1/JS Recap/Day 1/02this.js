

/*

this - bind 

*/

// let obj1={
//     name:"vikas",
//     age:27,
//     salary:10000
// }
//access
// console.log(obj1.name);
// console.log(obj1["name"]);

//loop - for in
console.log("------------------------------------------------");


// for(const keys in obj1){
//     console.log(keys,obj1[keys]);
    
// }


/*

this 

case 1 - global -this -access - window object
case 2 - object - 2function- parent func (es5)-child function - es5 - child - this - window
case 3- object - 2 function - parent fun(es5)-child funtion-es6 - this -? parent object
case 4 - object - 2 function - parent fun(es6)-child func-es5 - this - ?window
case 5 - es6 es6












*/


// console.log(this);


// let obj={
//     name:"vikas",
//     age:27,
//     fun:function parent(){ //es5
//         function child(){
//             console.log(this);
            
//         }
//         child();
//         return "dice"
    
//     }
// }
// console.log(obj.fun());


// let obj={
//     name:"vikas",
//     age:27,
//     fun:function parent(){
//       const child=  ()=>{
//             console.log(this);
            
//         }
//         child();
//     }
// }

// console.log(obj.fun());


let obj={
    name:"vikas",
    age:27,
    fun:()=>{
        function child(){
            console.log(this);
            
        }
        child();

    }
}

console.log(obj.fun());

