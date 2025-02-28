// ----------- Not an efficient Solution ---- Complexity O(n^2) -------

// function containsDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(containsDuplicate([1, 2, 3, 5]));

// ----------- Efficient Solution ---- Complexity O(n) --- Leetcode ----

function containsDuplicate(arr) {
  let numbers = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (numbers.has(arr[i])) {
      return true;
    }
    numbers.add(arr[i]);
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 5,1]));
