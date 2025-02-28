// ----------- Not efficient solution ----complexity O(n^2)--------

// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// ----------- Efficient Solution ---- Complexity O(n) --- Almost same as below-----

// var twoSum = function (nums, target) {
//   let hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (complement in hash) {
//       return [hash[complement], i]; // hash[complement], -- it gives the index of complement
//     }
//     hash[nums[i]] = i;
//   }
// };

// ----------- Efficient Solution ---- Complexity O(n) --- Almost same as below-----

// function twoSum(arr, target) {
//   let numToIndex = {};
//   for (let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i];
//     console.log(complement);
//     if (numToIndex.hasOwnProperty(complement)) {
//       return [numToIndex[complement], i]; // numToIndex[complement], -- it gives the index of complement
//     }

//     numToIndex[arr[i]] = i;
//   }

//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));

// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// ----------- Efficient Solution ---- Complexity O(n) --- Leetcode -----

function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i]; // map.get(complement) -- it gives the index of complement
    }
    map.set(arr[i], i);
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
