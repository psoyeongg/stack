class Stack {
  constructor() {
    this.items = [];
  }

  // 상수시간 또는 O(1)
  push(item) {
    this.items.push(item);
  }

  // 상수시간 또는 O(1)
  pop() {
    this.items.pop();
  }

  // 상수시간 또는 O(1)
  peek() {
    return this.items.at(-1);
    // return this.items[this.items.length - 1];
  }
}

const s = new Stack();

s.push(10);
s.push(20);
s.push(30);
s.push(40);

console.log(s); // [10,20,30,40]
console.log(s.peek()); // 40

s.pop();
s.pop();

console.log(s); // [10,20]
