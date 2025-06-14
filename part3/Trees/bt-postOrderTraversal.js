// PostOrder Traversal (LeftSubTree ➡ RightSubTree ➡ Node) of binary Tree node values using DFS --- leetcode --

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// ------------ Iterative method ------------

const postOrderTaversal = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length !== 0) {
    const curr = stack.pop();
    result.push(curr.val);

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return result.reverse();
};

// ------------ Recursive method ------------

// const postOrderTaversal = (root) => {
//   if (root === null) return [];
//   const leftValues = postOrderTaversal(root.left);
//   const rightValues = postOrderTaversal(root.right);
//   return [...leftValues, ...rightValues, root.val];
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

console.log(postOrderTaversal(a));
