// class Node {

//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// a.next = b;
// b.next = c;
// c.next = d;

// A --> B --> C --> D --> null

// Iterative method
// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

// printLinkedList(a);

// Recursive Method

// const printLinkedList = (head) => {
//   if (head === null) return;
//   console.log(head.val);
//   printLinkedList(head.next);
// };

// printLinkedList(a);

// --------------------------------------

// ----- Linked list problems -------
// 1.--- push elements of linked list to array

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// a.next = b;
// b.next = c;
// c.next = d;

// Iterative approach
// const movesElementsToArr = (head) => {
//   const valuesArr = [];
//   let current = head;
//   while (current !== null) {
//     valuesArr.push(current.val);
//     current = current.next;
//   }
//   return valuesArr;
// };

// console.log(movesElementsToArr(a));

// recursive approach
// const movesElementsToArr = (head) => {
//   const valuesArr = [];
//   fillValues(head, valuesArr);
//   return valuesArr;
// };

// const fillValues = (head, valuesArr) => {
//   if (head === null) return;
//   valuesArr.push(head.val);
//   fillValues(head.next, valuesArr);
// };

// console.log(movesElementsToArr(a));

// --------------------------------------

// 2.--- Total sum of all Elements of singly linked list

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const two = new Node(2);
// const eight = new Node(8);
// const three = new Node(3);
// const seven = new Node(7);

// two.next = eight;
// eight.next = three;
// three.next = seven;

// Iterative approach
// const totalSumofNodes = (head) => {
//   let sum = 0;
//   let current = head;
//   while (current !== null) {
//     sum += current.val;
//     current = current.next;
//   }
//   return sum;
// };

// recursive approach
// const totalSumofNodes = (head) => {
//   if (head === null) return 0;
//   return head.val + totalSumofNodes(head.next);
// };

// console.log(totalSumofNodes(two));

// --------------------------------------

// 3.--- Find Target from the linkedList

// class Node {

//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// a.next = b;
// b.next = c;
// c.next = d;

// Iterative approach
// const findTarget = (head, target) => {
//   let curr = head;
//   while (curr !== null) {
//     if (curr.val === target) {
//       return true;
//     }
//     curr = curr.next;
//   }
//   return false;
// };

// recursive approach

// const findTarget = (head, target) => {
//   if (head === null) return false;
//   if (head.val === target) return true;
//   return findTarget(head.next, target);
// };

// console.log(findTarget(a, "G"));

// --------------------------------------

// 4.--- Return the value of given index node

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// a.next = b;
// b.next = c;
// c.next = d;

// Iterative approach
// const valueOfGivenIndex = (head, index) => {
// if (index < 0) return "Invalid index";

// let curr = head;
// let count = 0;

// while (curr !== null) {
//   if (count === index) return curr.val;
//   curr = curr.next;
//   count++;
// }

// return "Index out of bounds";
// };

// recursive
// const valueOfGivenIndex = (head, index) => {
//   if (head === null) return "Index out of bounds";
//   if (index === 0) return head.val;
//   return valueOfGivenIndex(head.next, index - 1);
// };

// console.log(valueOfGivenIndex(a, 2));

// --------------------------------------

// 4.--- Return the value of given index node

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// a.next = b;
// b.next = c;
// c.next = d;

// Iterative approach
// const reverseLinkedList=(head)=>{
// let prev=null
// let curr=head

// while(curr!==null){
//   const next=curr.next
//   curr.next=prev
//   prev=curr
//   curr=next
// }
// return prev.val
// }
// console.log(reverseLinkedList(a));

// const reverseLinkedList = (head, prev = null) => {
//   if (head === null) return prev.val;
//   const next = head.next;
//   head.next = prev;
//   return reverseLinkedList(next, head);
// };

// console.log(reverseLinkedList(a));

// --------------------------------------

// 5.--- Zipper List Problem --- Merge Alternate of list 1 and list 2

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const p = new Node("P");
const q = new Node("Q");
const r = new Node("R");

p.next = q;
q.next = r;


// Iterative approach

// const mergeAlternate = (head1, head2) => {
//   if (!head1) return head2;
//   if (!head2) return head1;

//   let tail = head1;
//   let curr1 = head1.next;
//   let curr2 = head2;
//   let count = 0;

//   while (curr1 !== null && curr2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = curr2;
//       curr2 = curr2.next;
//     } else {
//       tail.next = curr1;
//       curr1 = curr1.next;
//     }
//     tail = tail.next;
//     count++;
//   }

//   // Attach remaining nodes from either list
//   if (curr1 !== null) tail.next = curr1;
//   if (curr2 !== null) tail.next = curr2;

//   return head1; // Return the updated head
// };

// const printList = (head) => {
//   let curr = head;
//   let result = "";
//   while (curr !== null) {
//     result += curr.val + " → ";
//     curr = curr.next;
//   }
//   console.log(result + "null");
// };

// const mergedHead = mergeAlternate(a, p);
// printList(mergedHead);

// Recursive approach

const mergeAlternate = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = mergeAlternate(next1, next2);
  return head1;
};

const printList = (head) => {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " ➡ ";
    curr = curr.next;
  }
  console.log(result + "null");
};
const mergedHead = mergeAlternate(a, p);
printList(mergedHead);
