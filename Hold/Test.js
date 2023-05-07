class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }

  add(val) {
    let arr = [];
    let temp = this.head;
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.last = this.head;
    } else {
      this.head = node;
      this.head.next = temp;
    }

    // arr.push();
    arr.push(temp);
    // return arr;
    return ++this.size;
  }

  pop() {
    if (!this.head) return null;

    if (this.head === this.last) return (this.last = null);
    let temp = this.head;

    this.head.next = temp;

    this.size--;
    return temp.val;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }

  add(val) {
    let arr = [];
    let node = new Node(val);
    let temp = this.head;
    if (!this.head) {
      this.head = node;
      this.last = node;
    } else {
      this.head.next = node;
      this.head = node;

      arr.push(temp);
    }
    console.log(++this.size);
    return arr;
  }

  remove() {
    if (!this.head) return null;
    let temp = this.head;
    if (this.head === this.last) {
      return (this.last = null);
    }

    this.head = this.head.next;
    this.size--;
    return temp.val;
  }
}

// let stack = new Stack();
let stack = new Queue();

console.log(stack.add(44));
console.log(stack.add(4));
console.log(stack.add(45));
console.log(stack.add(41));
console.log(stack.add(47));
console.log("remove: ", stack.remove());

// console.log(stack.add(6));
// console.log(stack.add(2));
// console.log(stack.add(21));
// console.log(stack.add(25));
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.add(3));
