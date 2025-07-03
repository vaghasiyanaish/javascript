//queue

// class queue{
//     constructor() {
//         this.queue = [];
//     }
// }

// function enqueue(element) {
//     this.queue.push(element);
// }

// function dequeue() {
//     if (this.isEmpty()) {
//         return "Queue is empty";
//     }
//     return this.queue.shift();
// }

// function isEmpty() {
//     return this.queue.length === 0;
// }

// function length() {
//     return this.queue.length;
// }

// function display(){
//     queue.array.forEach(element => {
//         console.log(element);
//     });
// }

// let res = new queue();
// res.enqueue(11);
// res.enqueue(12);
// res.enqueue(13);
// res.enqueue(14);
// res.enqueue(15);
// console.log(res.length()); // Output: 5
// console.log(res.dequeue()); // Output: 11
// console.log(res.length()); // Output: 4
// console.log(res.dequeue()); // Output: 12
// res.display(); // Output: 13, 14, 15

//2.write a program queue using two stacks

// class QueueUsingStacks {
//  constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   Push(element) {
//     this.stack1.push(element);
//   }

//   Pop() {
//     if (this.stack1.length === 0) {
//       return null;
//     }
    
//     while (this.stack1.length > 1) {
//       this.stack2.push(this.stack1.pop());
//     }
    
//     let dequeuedElement = this.stack1.pop();
  
//     while (this.stack2.length > 0) {
//       this.stack1.push(this.stack2.pop());
//     }
//     return dequeuedElement;

//   }
  
//   isEmpty() {
//     return this.stack1.length === 0;
//   }

//   clear() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   display() {
//     return this.stack1.join(' '); 
//   }
//   }

//   let queueUsingStacks = new QueueUsingStacks();

//   queueUsingStacks.Push(11);
//   queueUsingStacks.Push(12);
//   queueUsingStacks.Push(13);
//   queueUsingStacks.Push(14);
//   queueUsingStacks.Push(15);

//   queueUsingStacks.Pop();

//   console.log(queueUsingStacks.display());

//output: 12 13 14 15

//3.write a program check first string swap can make strings equal

// function swap(s1, s2) {
//     if (s1.length !== s2.length) return false;
//     let diff = [];
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i]) diff.push(i);
//     }
//     if (diff.length === 0) return true;
//     if (diff.length !== 2) return false;

//     let arr = s1.split('');
//     [arr[diff[0]], arr[diff[1]]] = [arr[diff[1]], arr[diff[0]]];
//     return arr.join('') === s2;
// }


// console.log(swap("nayan", "nayan"));
// console.log(swap("1111", "1111"));
// console.log(swap("abc", "acf"));
// console.log(swap("1010", "0101"));

//output:true
//       true
//       false
//       false

