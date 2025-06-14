// Preorder Traversal (Node ➡ LeftSubTree ➡ RightSubTree) of binary Tree node values using DFS --- leetCode --
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ------------ Iterative method ------------

const preOrderTaversal = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length !== 0) {
    const curr = stack.pop();
    result.push(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return result;
};

// ------------ Recursive method ------------

// const preOrderTaversal = (root) => {
//   if (root === null) return [];
//   const leftValues = preOrderTaversal(root.left);
//   const rightValues = preOrderTaversal(root.right);
//   return [root.val, ...leftValues, ...rightValues];
// };

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

console.log(preOrderTaversal(a));
