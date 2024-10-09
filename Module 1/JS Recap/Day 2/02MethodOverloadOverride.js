


/*

method overloading and method overriding 

Method Overloading - 
method - function - object .class.functionn 

method 

area(l,b,h){

return l*b; //area

return l*b*h //volume


}


*/


// class Area{

//     constructor(){

//     }

   
//     area(l,b){
//         return l*b;
//     }

//     area(l,b,h){
//         return l*b*h;
//     }
// }

// let obj1= new Area();
// console.log(obj1.area(2,6,3));



class A{
    constructor(X,Y,Z){
        this.X=X;
        this.Y=Y;
        this.Z=Z;

    }


}

class B extends A{
    constructor(X){
        super()
        this.X=100;
    }

}

let objB=new B(10,20,30);
console.log(objB);


