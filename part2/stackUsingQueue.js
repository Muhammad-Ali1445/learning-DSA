// --------- Using two queues ---push Efficient-------

class MyStack {

  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x) {
    this.q1.push(x);
  }

  pop() {
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    const poppedElement = this.q1.shift();
    [this.q1, this.q2] = [this.q2, this.q1];
    return poppedElement;
  }

  top() {
    return this.q1[this.q1.length - 1];
  }

  empty() {
    return this.q1.length === 0;
  }
}

const stack1 = new MyStack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log("Stack:", stack1);
console.log(stack1.top()); 
console.log(stack1.pop()); 
console.log(stack1.empty()); 

// --------- Using a single queue -----pop Efficient------ 

class MyStack {
  constructor() {
    this.q = [];
  }

  push(x) {
    this.q.push(x);
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }
  }

  pop() {
    return this.q.shift();
  }

  top() {
    return this.q[0];
  }

  empty() {
    return this.q.length === 0;
  }
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack :", stack);z
console.log(stack.top());
console.log(stack.empty());

