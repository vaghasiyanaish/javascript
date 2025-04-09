//array

let arr=[1,2,"anish","vaghasiya",5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr);

let arr1=[11,12,13,"a","b","c"];

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

//function

let arr2=[11,12,13,14,15,"a","b","c","d","e"];

for(i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}

//push

arr2.push("f");
console.log(arr2);

//pop

arr2.pop();
arr2.pop();
arr2.pop();
console.log(arr2);

//unshift

arr2.unshift(0);
console.log(arr2);

//shift

arr2.shift();
arr2.shift();
arr2.shift();
console.log(arr2);

//splice

arr2.splice(2,1);
console.log(arr2);

arr2.splice(2,0, 16);
console.log(arr2);