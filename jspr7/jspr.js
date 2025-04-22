//ans:1

class school{
    student(name,email,number){
        this.name=name;
        this.email=email;
        this.number=number;
        console.log("Student name: "+this.name+" Email: "+this.email+" Number: "+this.number);
    }
    teacher(name1,email1,number1){
        this.name1=name1;
        this.email1=email1;
        this.number1=number1;
        console.log("Teacher name: "+this.name1+" Email: "+this.email1+" Number: "+this.number1);
    }
}

let obj=new school();
obj.student("anish","anishbvaghasiya001@gmail.com","8320744767");
obj.teacher("chirag","chiragshiyani@gmail.com","5535644464");

//output
// Student name: anish Email: anishbvaghasiya001@gmail.com Number: 8320744767
// Teacher name: chirag Email: chiragshiyani@gmail.com Number: 5535644464

//ans:2

class person{
    constructor(name2,ag2){
        this.name2=name2;
        this.age2=ag2;
    }
}
class child extends person{
    data(){
        console.log("Child name: "+this.name2+"  age: "+this.age2);
    }
}

let obj1=new child("anish",20);
obj1.data();

//output
// Child name: anish  age: 20

//ans:3

class con{
    constructor(){
        console.log("Constructor called");
    }
}
let obj3=new con();

//output
// Constructor called

//ans:4

class shape{
    circle(r){
        this.r=r;
        console.log("Circle area: "+(3.14*this.r*this.r));
    }
    rectangle(w,h){
        this.w=w;
        this.h=h;
        console.log("Rectangle area: "+(this.w*this.h));
    }
}

let obj4=new shape();
obj4.circle(5);
obj4.rectangle(5,10);

//output
// Circle area: 78.5
// Rectangle area: 50