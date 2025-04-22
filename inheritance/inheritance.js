//single inheritance

class sir{
    constructor(){
        console.log("constructor from parent class")
    }
    
    sayhi(){
        console.log("hi from parent class")
    }
}

class student extends sir{
    constructor(){
        super() // call parent class constructor
        console.log("constructor from child class")
    }
    saybye(){
        this.sayhi(); // call parent class method
        console.log("bye from child class")
    }
}

let obj=new student();
obj.saybye(); // parent class method