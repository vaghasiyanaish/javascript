class test{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
        console.log("anish vaghasiya")
    }
    display(){
        console.log("hello everyyone",this.name,this.surname);
    }
}

let obj=new test("anish","vaghasiya");
obj.display();