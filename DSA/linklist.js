class node{
    constructor(data) {
    this.data = data;
    this.next = null;
    }
}
class singlylinklist{
    constructor() {
        this.head = null;
    }
    insert(data) {
        let newNode = new node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    display() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
         else {
            let current = this.head;
            let output = '';
            while (current) {
                output += current.data + ' -> ';
                current = current.next;
            }
            console.log(output + 'null');
        }
    }
    delete(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }
}

let list = new singlylinklist();
list.insert(10);
list.insert(20);
list.insert(30);
list.display();
list.delete(20);
list.display();





