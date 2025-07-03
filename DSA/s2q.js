class queue{
    constructor() {
        this.q1 = [];
    }

    enqueue(element) {
        this.q1.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.q1.shift();
    }
    isEmpty() {
        return this.q1.length === 0;
    }
    length() {
        return this.q1.length;
    }

}

let obj = new queue();
obj.enqueue(11);
obj.enqueue(12);
obj.enqueue(13);
obj.enqueue(14);
obj.enqueue(15);
console.log(obj.length()); // Output: 5
