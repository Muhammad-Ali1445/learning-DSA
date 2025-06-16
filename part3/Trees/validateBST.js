class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isValidBST = (root) => {
  const validate = (node, min, max) => {
    if (!node) return true;
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }

    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  };

  return validate(root, null, null);
};

const a = new Node(7);
const b = new Node(5);
const c = new Node(12);
const d = new Node(10);
const e = new Node(15);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log("Valid binary tree ", isValidBST(a));
