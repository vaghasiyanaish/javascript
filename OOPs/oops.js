class person{
    a=9444;

    hello(){
        console.log("hello everyone good morning");
    }
    display(){
        this.hello();
        console.log("anish vaghasiya and my gr id is:",this.a)
    }
}

let obj=new person;

obj.display();
obj.hello();    