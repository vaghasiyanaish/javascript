//find smallest number

let a=10 , b=5;

if(a<b){
    console.log("a is smallest number");
}else {
    console.log("b is smallest number");
}

//find positive nagative value

let c=-10;

if(c>=0){
    console.log("c is positive number");
}else{
    console.log("c is negetive number");
}

//enter student marks pass or not

let sper=30;

if(sper>=50){
    console.log("student is pass");
}
else{
    console.log("student is not pass");
}

//check value divided by 5 or not

let num=10;
let ans=num%5;

if(ans==0){
    console.log("number is divided by 5");
}else{
    console.log("number is not divided by 5");
}

//check value divided by 5 or 3

let num1=14;
let ans1=num1%5;
let ans2=num1%3;

if(ans1==0&&ans2==0){
    console.log("number is divivded by 5 and 3 both");
}else{
    console.log("number is not divided by 5 and 3 both");
}

//check person is eligible for votong or not

let perage=20;

if(perage>=18){
    console.log("person is eligible for voting");
}else{
    console.log("person is not eligible for voting");
}

//pogram for basic salary

let bsalary=16000;
let fsalary1;
let hra1;
let da1;
let fsalary2;
let hra2;
let da2;
let fsalary3;
let hra3;
let da3;
let fsalary4;
let hra4;
let da4;


if(bsalary>=0&&bsalary<=5000){
    hra1=bsalary*0.08;
    da1=bsalary*0.2;
    fsalary1=bsalary+hra1+da1;
    console.log("final salry of employee is:",fsalary1)
}else if(bsalary>=5000&&bsalary<=10000){
    hra2=bsalary*0.12;
    da2=bsalary*0.3;
    fsalary2=bsalary+hra2+da2;
    console.log("final salary of emoloyee is:",fsalary2)
}else if(bsalary>=10000&&bsalary<=15000){
    hra3=bsalary*0.15;
    da3=bsalary*0.4;
    fsalary3=bsalary+hra3+da3;
    console.log("final salary of emoloyee is:",fsalary3);
}else if(bsalary>=15000){
    hra4=bsalary*0.2;
    da4=bsalary*0.5;
    fsalary4=bsalary+hra4+da4;
    console.log("final salary of emoloyee is:",fsalary4);
}

//pogram for slab

let slab=15000;
let it1;
let slab1;
let it2;
let slab2;
let it3;
let slab3;

if(slab>=0&&slab<=2500){
    console.log("the final amount of slab is:",slab)
}else if(slab>=2500&&slab<=5000){
    it1=slab*0.1;
    slab1=slab+it1;
    console.log("the final amount of slab is:",slab1);
}else if(slab>=5000&&slab<=10000){
    it2=slab*0.2;
    slab2=slab+it2;
    console.log("the final amount of slab is:",slab2);
}else if(slab>=10000){
    it3=slab*0.3;
    slab3=slab+it3;
    console.log("the final amount of slab is:",slab3);
}

//RESULT POGRAM

let res=36;

if(res>75){
    console.log("your grade is A");
}else if(res>60&&res<75){
    console.log("your grade is B");
}else if(res>45&&res<60){
    console.log("your grade is C");
}else if(res>35&&res<45){
    console.log("your grade is D");
}else{
    console.log("you are fail");
}

//x and y print

let x=3000;
let y=300;

if(x<2000||x>3000){
    console.log(x);
}else if(y>=100&&y<=500){
    console.log(y);
}


