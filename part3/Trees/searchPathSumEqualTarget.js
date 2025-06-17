// Check root-to-leaf pathSum equals target
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


// Iterative method

// const hasPathSum = (root, targetSum) => {
//   if (!root) return false;

//   // Stack contains [node, currentSum]
//   const stack = [[root, root.val]];

//   while (stack.length > 0) {

//     const [node, currentSum] = stack.pop();

//     if (!node.left && !node.right && currentSum === targetSum) {
//       return true;
//     }

//     if (node.right) {
//       stack.push([node.right, currentSum + node.right.val]);
//     }

//     if (node.left) {
//       stack.push([node.left, currentSum + node.left.val]);
//     }
//   }

//   return false;
// };

// ------ Recursive Method --------

const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(5);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log("Has path sum = ", hasPathSum(a, 19));

//     3
//    / \
//  11   4
//  / \    \
// 5   2    1
