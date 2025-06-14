// // Find the max root to leaf path sum from the binary tree using DFS --- iterative method ---

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const maxPathSum = (root) => {
//   let maxSum = -Infinity;
//   let stack = [{ node: root, sum: root.val }];
//   while (stack.length > 0) {
//     let { node, sum } = stack.pop();
//     if (!node.left && !node.right) {
//       maxSum = Math.max(maxSum, sum);
//     }
//     if (node.right) stack.push({ node: node.right, sum: sum + node.right.val });
//     if (node.left) stack.push({ node: node.left, sum: sum + node.left.val });
//   }
//   return maxSum;
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
// console.log("The maximum value of tree = ", maxPathSum(a));

// // Find the max root to leaf path sum from the binary tree --- recursive method ---

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.val + maxChild;
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
console.log("The maximum value of tree = ", maxPathSum(a));

//     3
//    / \
//  11   4
//  / \    \
// 4   2    1
