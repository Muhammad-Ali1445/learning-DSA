// // Find the minimum node value from the tree using BFS --- iterative method ---
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const minTree = (root) => {
//   if (!root) return Infinity;
//   let minVal = root.val;
//   let queue = [root];
//   while (queue.length > 0) {
//     let curr = queue.shift();
//     if (curr.val < minVal) {
//       minVal = curr.val;
//     }
//     if (curr.left) queue.push(curr.left);
//     if (curr.right) queue.push(curr.right);
//   }
//   return minVal;
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
// console.log("The minimum value of tree = ", minTree(a));

// Find the minimum node value from the tree using DFS --- recursive method ---
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const minTree = (root) => {
  if (root === null) return Infinity;
  const leftMin = minTree(root.left);
  const rightMin = minTree(root.right);
  return Math.min(root.val, leftMin, rightMin);
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
console.log("The minimum value of tree = ", minTree(a));
