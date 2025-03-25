// function hello(){
//     console.log("hello world");
// }
// hello();

// function maxnumber(){
//     let a=+prompt("enter the first number");
//     let b=+prompt("enter the second number");
//     let c=+prompt("enter the third number");
//     if(a>b&&a>c){
//         console.log("the max number is " + a)
//     }
//     else if(b>a&&b>c){
//         console.log("the max number is " + b)
//     }else if(c>a&&c>b){
//         console.log("the max number is " + c)
//     }
// }
// maxnumber();

// let p=+prompt("enter the first number");
// let q=+prompt("enter the second number");
// let r=+prompt("enter the third number");
// function minnumber(){
//     if(p<q){
//         if(p<r){
//             console.log("the min number is " + p)
//         }else{
//             console.log("the min number is " + r)
//         }
//     }else{
//         if(q<r){
//             console.log("the min number is " + q)
//         }else{
//             console.log("the min number is " + r)
//         }
//     }
//     }
//     minnumber();

    // function p1(){
    //     for(i=10;i>=1;i--){
    //         console.log(i);
    //     }
    // }
    // p1();

    // function p2(){
    //     for(i=51;i<100;i++){
    //         console.log(i);
    //     }
    // }
    // p2();

    // function p3(){
    //     let n=+prompt("enter the number");
    //     for(i=1;i<=n;i++){
    //         console.log(i);
    //     }
    // }
    // p3();

    // function p4(){
    //     let n=+prompt("enter number :");
    //     for(i=n;i>=1;i--){
    //         console.log(i);
    //     }
    // }
    // p4();

    // function p5(){
    //     let n=+prompt("enter the number");
    //     for(i=1;i<=n;i++){
    //         if(i%2==0){
    //             console.log(i);
    //         }
    //     }
    // }
    // p5();

    // function p6(){
    //     let n=+prompt("enter the number");
    //     for(i=1;i<=n;i++){
    //         if(i%2!=0){
    //             console.log(i);
    //         }
    //     }
    // }
    // p6();

    // function p7(){
    //     let n=+prompt("enter the number");
    //     for(i=0;i<=n;i++){
    //         let sqr;
    //         sqr=i*i;
    //         console.log(sqr);
    //     }
    // }
    // p7()

//     function p8(){
//         let n=+prompt("enter the number");
//         for(i=0;i<=n;i++){
//             let mul=0;
//             mul=i*2;
//             console.log(mul);
//         }
//     }
// p8();

function p10(){
    let n=+prompt("enter the number");
    for(i=0;i<=n;i++){
        let sum=0;
        sum+=i;          
        console.log(sum);
    }
}
p10()