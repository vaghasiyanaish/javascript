//1. Write a program for Stack Operation Program. (Insert, Delete, isEmpty, Length).

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items.pop();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     length() {
//         return this.items.length;
//     }
// }

// let obj = new Stack();
// obj.push(11);
// obj.push(12);
// obj.push(13);
// obj.push(14);
// obj.push(15);
// console.log(obj.length()); 
// console.log(obj.pop()); 
// console.log(obj.pop());

// console.log(obj.isEmpty());

// Output:5
// 15
// 14
// false



// 2. Write a program for Next Greater Element using Stack.

// let list = [7,10,45,67,78];
// function nextele(list) {
//     let stack = [];
//     let res = new Array(list.length).fill(-1);

//     for (let i = 0; i < list.length; i++) {
//         while (stack.length > 0 && list[stack[stack.length - 1]] < list[i]) {
//             res[stack.pop()] = list[i];
//         }
//         stack.push(i);
//     }

//     return res;
// }

// console.log(nextele(list));

// Output:
// [ 10, 45, 67, 78, -1 ]


// 3. Write a program for a reverse string using Stack.

// function revstr(str) {
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }
//     let reversed = "";
//     while (stack.length > 0) {
//         reversed += stack.pop();
//     }
//     return reversed;
// }

// console.log(revstr("1,2,3,4,5,6,7,8,9,10"));

// Output:
//01,9,8,7,6,5,4,3,2,1