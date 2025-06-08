// Inserting the node into Binary Search Tree 

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function insertNode(head, data) {
  if (head === null) {
    head = new Node();
    head.data = data;
    return head;
  }

  if (data < head.data) {
    head.left = insertNode(head.left, data);
  } else {
    head.right = insertNode(head.right, data);
  }

  return head;
}

let root = new Node(100);

insertNode(root, 80);
insertNode(root, 120);
insertNode(root, 50);
insertNode(root, 90);
insertNode(root, 110);
insertNode(root, 140);
insertNode(root, 30);
insertNode(root, 60);
insertNode(root, 85);
insertNode(root, 95);
insertNode(root, 115);
insertNode(root, 150);

insertNode(root, 108);

function printTree(node, prefix = "", isLeft = true) {
  if (node.right !== null) {
    printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
  }

  console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);

  if (node.left !== null) {
    printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
  }
}
printTree(root);
