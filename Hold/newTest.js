// class Node {
//   constructor(val, next) {
//     this.next = next;
//     this.val = val;
//   }
// }

// class Queue {
//   constructor() {
//     this.items = {};
//     this.head = 0;
//     this.last = 0;
//   }

//   enqueue(val) {
//     this.items[this.last] = val;
//     this.last++;

//     return val + " Inserted";
//   }

//   print() {
//     return this.items;
//   }

//   dequeue() {
//     let item = this.items[this.head];
//     delete this.items[this.head];
//     this.head++;
//     return item;
//   }

//   peek() {
//     return this.items[this.head];
//   }
// }

// let queue = new Queue();

// console.log(queue.enqueue(4));
// console.log(queue.enqueue(42));
// console.log(queue.enqueue(46));
// console.log(queue.enqueue(41));
// // console.log(queue.dequeue());
// console.log(queue.print());
// console.log(queue.peek());

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.last = 0;
  }

  print() {
    return this.items;
  }

  add(val) {
    this.items[this.last] = val;
    this.last++;
    return val + " Inserted";
  }

  remove() {
    let item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
}

let queue = new Queue();

console.log(queue.print());
console.log(queue.add(4));
console.log(queue.add(46));
console.log(queue.add(43));
console.log(queue.remove());

console.log(queue.print());
