class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;

      this.head = node;
      this.head.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.head) return null;

    if (this.head === this.last) return (this.last = null);

    let temp = this.head;
    this.head = this.head.next;

    return temp.val;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.next = node;
      this.tail = node;
    }
    return ++this.size;
  }

  pop() {
    if (!this.head) return null;
    if (this.head === this.tail) return (this.last = null);

    let temp = this.head;
    this.head = this.head.next;
    this.size--;
    return temp.val;
  }
}

let stack = new Queue();

console.log(stack.add(3));
console.log(stack.add(7));
console.log(stack.pop());
