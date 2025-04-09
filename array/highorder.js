let arr=[1,2,3,4,5,6,7,8,9,10];

console.log(arr);

//includes function

console.log(arr.includes(11));

//isarray function

console.log(Array.isArray(arr));

console.log(arr.length);

//filter function

let res=arr.filter((i)=>{
    let cond=i<5;
    return cond;
})
console.log(res);

//some function

let res1=arr.some((i1)=>{
    return i1<5;
})
console.log(res1);

//every function

let res3=arr.every((i3)=>{
    return i3<5;
})
console.log(res3);

//indexof function

console.log(arr.indexOf(7));

//foreach function

let res4=arr.forEach((i5)=>{
    console.log(i5);
    console.log(i5+2);
})

//map function

let res5=arr.map((i6)=>{
    return i6*2;
})
console.log(res5);