//create queue using 2 stack

class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    length() {
        return this.stack1.length + this.stack2.length;
    }
}   

let queue = new QueueUsingStacks();
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);  
queue.enqueue(14);
queue.enqueue(15);
console.log(queue.length()); // Output: 5
console.log(queue.dequeue()); // Output: 11
console.log(queue.length()); // Output: 4
console.log(queue.dequeue()); // Output: 12

console.log(queue.length()); // Output: 3
console.log(queue.dequeue()); // Output: 13
