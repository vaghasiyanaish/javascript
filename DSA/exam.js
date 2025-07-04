// WAP to check array is palindrome or not using JavaScript (only with Numbers)

let arr=[1,2,3,4,5,6,7,8,9];
let rev=arr.reverse();
if(arr==rev){
    console.log("array is palindrome");
}else{
    console.log("array is not palindrome");
}

//output: array is palindrome

//WAP to Merge two array in single Array using JavaScript.

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let mergedArray = arr1.concat(arr2);
console.log("Merged Array: ", mergedArray);

//output: Merged Array:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//WAP to implements Quick Sort using JavaScript.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

let unsortedArray=[12,67,45,23,9,3,89,56,34,78];
let sortedArray = quickSort(unsortedArray);
console.log("Sorted Array: ", sortedArray);

//output: Sorted Array:  [ 3, 9, 12, 23, 34, 45, 56, 67, 78, 89 ]

//WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function) 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    delete(data) {
        if (this.head === null) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    display() {
        let result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

let list = new SinglyLinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);
list.display(); 

// Output: 10 -> 20 -> 30 -> 40 -> 50

list.delete(30);
list.display();

// Output: 10 -> 20 -> 40 -> 50

//WAP to implement insert and remove element from Queue using JavaScript.

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        return this.items.join(" ");
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue after enqueuing 1, 2, 3: ", queue.display());
queue.dequeue();
console.log("Queue after dequeue: ", queue.display());

// Output: Queue after enqueuing 1, 2, 3:  1 2 3
//         Queue after dequeue:  2 3


