let a=10, b=20;

setTimeout(() => {
    console.log("the sum of a and b is:",a+b);
}, 5000);

let id=setInterval(() => {
    console.log("the multiplication of a and b is:",a*b);
},1000);

clearInterval(id);

let t=setInterval(() => {
    let date=new Date();
    let time=date.toLocaleTimeString();
    console.log("the current time is:",time);
    document.getElementById("time").innerHTML=time;
},1000);


