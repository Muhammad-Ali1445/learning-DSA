class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const isSameTree = (p, q) => {
//   const q1 = [p];
//   const q2 = [q];

//   while (q1.length > 0 && q2.length > 0) {
//     const node1 = q1.shift();
//     const node2 = q2.shift();

//     if (!node1 && !node2) continue;

//     if (!node1 || !node2 || node1.val !== node2.val) return false;

//     q1.push(node1.left);
//     q1.push(node1.right);
//     q2.push(node2.left);
//     q2.push(node2.right);
//   }
//   return q1.length === 0 && q2.length === 0;
// };


// Recursive approach 

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
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

const f = new Node(3);
const g = new Node(9);
const h = new Node(20);
const i = new Node(15);
const j = new Node(7);

f.left = g;
f.right = h;
h.left = i;
h.right = j;

console.log("Is the trees same : ", isSameTree(a, f));
