/*

class - blueprint , skelton , architecture --> new new object /instance -- es6

dynmaic object - function cons 

inheritance - dry -







*/



class Human {

    constructor(nooflegs,noofhands,food,behaviour){
        this.legs=nooflegs;
        this.hands=noofhands;
        this.food=food;
        this.behaviour=behaviour;

    }
}

// let human1=new Human(2,2,"veg","honest");
// console.log(human1);


// class Animal{
//     constructor(noofhands,nooflegs,food,behaviour){
//         this.hands=noofhands;
//         this.legs=nooflegs;
//         this.food=food;
//         this.behaviour=behaviour;
//     }
// }


// let animal1 = new Animal(2,2,"non veg","loyal")
// console.log(animal1);



class Animal extends Human{
    // constructor(hands,legs,food,behaviour){
    //     super()
        
    //     this.handss=hands;
    //     this.legss=legs;
    //     this.foods=food;
    //     this.behaviours=behaviour;

    // }
    constructor(){

    }
    

}

let animal1= new Animal(2,2,"non veg","loyal");
console.log(animal1);




//method overloading and method overriding










