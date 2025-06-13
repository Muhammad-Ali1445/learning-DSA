// Inorder Traversal (left ➡ Node ➡ Right) of binary Tree node values using DFS 

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


// ------------ Iterative method ------------

// const inorderTaversal = (root) => {
//   let result = [];
//   let stack = [];

//   let curr = root;
//   while (curr !== null || stack.length > 0) {
//     while (curr !== null) {
//       stack.push(curr);
//       curr = curr.left;
//     }
//      curr = stack.pop();
//     result.push(curr.val);

//     curr = curr.right;
//   }
//   return result;
// };


// ------------ Recursive method ------------

const inorderTaversal = (root) => {
  if (root === null) return [];
  const leftValues = inorderTaversal(root.left);
  const rightValues = inorderTaversal(root.right);
  return [...leftValues, root.val, ...rightValues];
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

console.log(inorderTaversal(a));
