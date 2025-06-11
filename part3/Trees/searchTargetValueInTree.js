// Search target using breath first search algo --- iterative method ----
// class Node {
//   constructor(data) {
//     this.val = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// const searchTargetFromTree = (root, target) => {
//   if (root === null) return [];

//   const queue = [root];
//   while (queue.length > 0) {
//     const curr = queue.shift();
//     if (curr.data === target) return true;
//     if (curr.left) queue.push(curr.left);
//     if (curr.right) queue.push(curr.right);
//   }
//   return false;
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

// console.log(searchTargetFromTree(a, "d"));
// console.log(searchTargetFromTree(a, "j"));


// Search target using depth first search algo --- resursive method ----
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const searchTargetFromTree = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    searchTargetFromTree(root.left, target) ||
    searchTargetFromTree(root.right, target)
  );
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

console.log(searchTargetFromTree(a, "d"));
console.log(searchTargetFromTree(a, "j"));
