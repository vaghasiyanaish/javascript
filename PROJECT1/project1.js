//AREA OF CIRCLE

let r=20;
const pi=3.14;

let areaof_circle=pi*(r**2);
console.log("area of circle is:",areaof_circle);

//output=1256

//AREA OF TRIANGLE

let b=10
let h=30

let areaof_triangle=0.5*b*h;
console.log("area of triangle is:",areaof_triangle)

//output=150

//CONVERT CELCIUS TO FARENHEIT

let c=44;

let f=(44*9/5)+32;
console.log("convert celcius into farenheit is:",f);

//output:111.2

//AREA OF RECTANGLE

let w=20;
let l=30;

let areaof_rectangle=w*l;
console.log("area of rectangle is:",areaof_rectangle);

//output=600

let feet=14;

let inch=feet*12;
console.log("convert feet into inch is:",inch);

//output=120

//a^2-b^2=(a-b)(a+b)

let a1=20
let b1=10

let lhs1=(a1**2)-(b1**2);
console.log(lhs1);

let rhs1=(a1-b1)*(a1+b1);
console.log(rhs1);

console.log(lhs1===rhs1)

//output=true

//(a-b)^2=a^2-2ab+b^2

let a2=15;
let b2=5;

let lhs2=(a2-b2)**2;
console.log(lhs2);

let rhs2=(a2**2)-(2*(a2*b2))+(b2**2);
console.log(rhs2);

console.log(lhs2===rhs2);

//output=true

// (a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2bc

let a3=10
let b3=20
let c3=30

let lhs3=(a3+b3+c3)**2;
console.log(lhs3);

let rhs3=((a3)**2)+((b3)**2)+((c3)**2)+(2*(a3*b3))+(2*(a3*c3))+(2*(b3*c3));
console.log(rhs3);

console.log(lhs3===rhs3);

//output=true

//(a-b-c)^2=a^2+b^2+c^2-2ab-2ac+2bc

let a4=10
let b4=20
let c4=30

let lhs4=(a4-b4-c4)**2;
console.log(lhs4);

let rhs4=(a4**2)+(b4**2)+(c4**2)-(2*(a4*b4))-(2*(a4*c4))+(2*(b4*c4));
console.log(rhs4);

console.log(lhs4===rhs4);

//output:true

//(a-b)^3=a^3-3a^2b+3ab^2-b^3

let a5=10
let b5=20

let lhs5=(a5-b5)**3;
console.log(lhs5);

let rhs5=(a5**3)-(3*(a5**2)*b5)+(3*(a5*(b5**2)))-(b5**3)
console.log(rhs5);

console.log(lhs5===rhs5);

//output:true
