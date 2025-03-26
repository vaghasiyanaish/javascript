//1. no argument no return

function nanw(){
    let a=10;
    let b=20;
    let c=a+b;
    console.log("sum of a and b is:",c);
}
nanw();

//2. with argument and no return

function wanr(x=20,y=20){
    let z=x+y;
    console.log("sum of x and y is:",z);
}
wanr();
function wanr1(x1,y1){
    let z1=x1+y1;
    console.log("sum of x and y is:",z1);
}
wanr1(30,30);

//3. no argument with return

function nawr(){
    let p=12;
    let q=15;
    return p+q;
}
let ans=nawr();
console.log("sum of p and q is:",ans);

function nawr1(){
    let p1=25;
    let q1=25;
    return p1+q1;
}

console.log("sum of p and q is:",nawr1());

//4. with argument and with return

function wawr(s,t){
    return s+t;
}
console.log("sum of s and t is:",wawr(10,10));

function wawr1(s1=67,t1=89){
    let r1=s1+t1;
    return r1;
}
let u1=wawr1();
console.log("sum of s1 and t1 :",u1);

