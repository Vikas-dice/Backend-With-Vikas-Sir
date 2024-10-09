


/*
objects - key vallue pair



10 human store - 
let hj1,let h2....
array

details - age , salary , occupation
*/

// let emp1={
//     name:"vikas",
//     age:27,
//     salary:10000,
//     ocuupation:"teacher",
//     task:function(){
//         console.log("teaching");
        
//     },
//     education:["10th","12th","btech"],
//     otherdetails:{
//         ismarried:false,
//         hometown :"meerut"
//     }





// }//faculty , opertion , ADMIN , OFFICE STAFF ,

//FUNCTION CONS 


// console.log(emp1.__proto__);



function Employees(name,age,salary,education,occupation,task,otherdetails){

  this.name=name;
  this.umar=age;
  this.tankhuwa=salary;
  this.education=education;
  this.occupation=occupation;
  this.task=task;
  this.otherdetails=otherdetails;






}

let emp1=new Employees("vikas",27,10000,["10th","12th","btech"],"teacher",function(){console.log("teaching");
},{
    ismarried:false,hometown:"meerut"
});

let emp2=new Employees("manas",18,20000,["8th","10th"],"office boy",function(){
    console.log("office boy");
    
},{
    ismarried:false,
    hometown:"wb"
})
console.log(emp1);
console.log(emp2);

console.log(emp1==emp2);








