class Queue {
   constructor(capacity) {
     this.arr = new Array(capacity);
     this.head = 0;
     this.tail = 0;
     this.capacity = capacity;
     this.count = 0;
   }
 
   empty() {
     return this.count === 0;
   }
 
   push(element) {
     if (this.count === this.capacity) {
       throw new Error("Queue is full. Cannot push more elements.");
     }
 
     this.arr[this.tail] = element;
     this.tail = (this.tail + 1) % this.capacity;
     this.count++;
   }
 
   pop() {
     if (this.empty()) {
       throw new Error("Queue is empty. Cannot pop element.");
     }
 
     const element = this.arr[this.head];
     this.head = (this.head + 1) % this.capacity;
     this.count--;
     return element;
   }
 
   size() {
     return this.count;
   }
 }
 
 // Пример использования:
 const queue = new Queue(5);
 console.log(queue.empty()); // true
 
 queue.push(1);
 queue.push(2);
 queue.push(3);
 
 console.log(queue.size()); // 3
 
 console.log(queue.pop()); // 1
 console.log(queue.pop()); // 2
 
 console.log(queue.size()); // 1