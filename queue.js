class Queue {
  constructor() {
    this.items = [];
  }

  // 상수시간 O(1)
  enqueue(item) {
    this.items.push(item);
  }

  // 배열을 사용할 경우, 선형시간 O(n)
  // 연결 리스트를 사용할 경우, 상수시간 O(1)
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return;
    }

    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue); // [10,20,30]

queue.dequeue();
queue.dequeue();
console.log(queue); // [30]

console.log(queue.size()); // 1
