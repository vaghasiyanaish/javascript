// function rec(n){
//     if(n<10){
//         console.log("insight function:",n);
//         rec(++n);
//     }
//     console.log("outside function:",n);
// }
// rec(1);

//fibonacci series using recursio
// let a=0,b=1,c;
// for(i=0;i<10;i++){
//     c=a+b;
//     a=b;
//     b=c;
//     console.log(c);
// }

let n=prompt("enter the number:");
let mul=1;
for(let i=1;i<=n;i++){
    mul*=i;
    console.log("factorial of the number is:",mul);
}