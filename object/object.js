let obj1={
    name:"anish vaghasiya",
    email:"anishvaghasiya001@gmail.com",
    mobile:"9898476608",
    city:"surat",
}

console.log(obj1);

obj1.pincode="395006";

console.log(obj1);

delete obj1.pincode;

console.log(obj1);

let obj2={
    name1:"anish vaghasiya",
    hobby:["reading","teaching","swimming"]
}
console.log(obj2.hobby);
console.log(obj2.hobby[1]);

let ans2=obj2.hobby.forEach((item)=>{
    console.log(item);
})

for(let i in obj1){
    console.log(i,obj1[i]);
}

let arr3=[1,2,3,4,5,6,7,8,9,10];

for(let j in arr3){
    console.log(j,arr3[j]);
}

for (let k of arr3){
    console.log(k);
}