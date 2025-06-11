// find the sum of all the nodes of a tree using BFS ---- iterative method ----

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const treeSum = (root) => {
//   let sum = 0;
//   let queue = [root];
//   while (queue.length > 0) {
//     let curr = queue.shift();
//     sum += curr.val;
//     if (curr.left) queue.push(curr.left);
//     if (curr.right) queue.push(curr.right);
//   }
//   return sum;
// };

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(treeSum(a));

// find the sum of all the nodes of a tree using DFS ---- iterative method ----

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const treeSum = (root) => {
//   let sum = 0;
//   let stack = [root];
//   while (stack.length > 0) {
//     let curr = stack.pop();
//     sum += curr.val;
//     if (curr.left) stack.push(curr.left);
//     if (curr.right) stack.push(curr.right);
//   }
//   return sum;
// };

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log("The sum of all the nodes of a tree = ", treeSum(a));

// find the sum of all the nodes of a tree using DFS ---- iterative method ----

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeSum = (root) => {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log("The sum of all the nodes of a tree = ", treeSum(a));
