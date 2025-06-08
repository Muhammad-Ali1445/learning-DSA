// Print the values of nodes using depth first search Algorithm --- Iterative Method ----
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// const depthFirstValues = (root) => {
//   if (root === null) return [];
//   const result = [];
//   const stack = [root];
//   while (stack.length !== 0) {
//     const curr = stack.pop();
//     result.push(curr.data);

//     if (curr.right) stack.push(curr.right);
//     if (curr.left) stack.push(curr.left);
//   }
//   return result;
// };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(depthFirstValues(a));

// Print the values of nodes using depth first search Algorithm --- Recursive Method ----

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValuesRecurr = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValuesRecurr(root.left);
  const rightValues = depthFirstValuesRecurr(root.right);
  return [root.data, ...leftValues, ...rightValues];
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

console.log(depthFirstValuesRecurr(a));
