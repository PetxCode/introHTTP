class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.last = null;
    this.size = 0;
    this.data = [];
  }

  print() {
    return this.data;
  }

  add(value) {
    let temp = this.top;
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      this.last = node;
    } else {
      this.top = node;
      this.top.next = temp;
    }
    this.data.push(node);
    return ++this.size;
  }

  remove() {
    if (!this.top) return false;
    if (this.top === this.last) return false;

    let temp = this.top;
    this.top = this.top.next;

    return temp.value;
  }
}

// let stack = new Stack();
// console.log(stack.add(3));
// console.log(stack.add(5));
// console.log(stack.add(6));
// console.log("remove: ", stack.remove());
// console.log(stack.print());

class Queue {
  constructor() {
    this.top = 0;
    this.last = 0;
    this.items = {};
    this.size = this.items.length;
  }

  print() {
    return this.items;
  }

  peek() {
    return this.items[this.top];
  }

  add(val) {
    this.items[this.last] = val;
    this.last++;

    return val;
  }

  remove() {
    let item = this.items[this.top];
    delete this.items[this.top];
    this.top++;

    return item;
  }
}

let queue = new Queue();

console.log(queue.print());
console.log(queue.add(4));
console.log(queue.add(45));
console.log(queue.add(89));
console.log("Print value: ", queue.print());
console.log("Peek value: ", queue.peek());
console.log("Remove Peek value: ", queue.remove());
console.log("New Peek value: ", queue.peek());
console.log("Print value: ", queue.print());
