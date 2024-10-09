
/*

class - blueprint , skelton , 

human class - objects 
Animal Class - dog , cat - objects 

dog , cat - props

class keyword 







*/


class Employees{

    constructor(name,age,salary,task){
        console.log("i am running");
        this.naam=name;
        this.umar=age;
        this.salary=salary;
        this.kaam=task;

    }

     printdetails(){
        console.log("print details fun running ");
        console.log(this.salary);
    }

}

let emp1=new Employees("vikas",27,10000,function(){
    console.log("i teach");
    
})
console.log(emp1.occupation);
console.log(emp1.printdetails());














// let n1=3;
// let n2=6;
// let n3=5;
// if(n1>n2 && n1>n3){
//     console.log("1- ",n1);
    
//     console.log(n1 +"is biggest");
    
    
// }else if(n2>n1 && n2>n3){
//     console.log("2- ",n2);
//     console.log(n2 +"is biggest");
    
// }else{
//     console.log("3- ",n3);
//     console.log(n3+"is bigest");
    
// }







