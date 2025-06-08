// print the values of node using breath first search algorithm ---- Iterative method -----
// This problem will solve only by iterative method easily using queue . If we make its recursive
// solution then behind the hood it will use stack that why it will create difficulty for us .

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const breathFirstValues = (root) => {
  if (root === null) return [];
  let result = [];
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    result.push(curr.data);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return result;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(breathFirstValues(a));
