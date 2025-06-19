class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelOrderTraversal = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    let queueSize = queue.length;
    let currLevel = [];
    for (let i = 0; i < queueSize; i++) {
      let curr = queue.shift();
      currLevel.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(currLevel);
  }

  return result;
};

const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log("Level OrderTraversal ", levelOrderTraversal(a));
