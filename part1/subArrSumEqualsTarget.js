// var subarraySumBF = function(nums, k) {
//     let counter = 0;
//     for (let i=0;i<nums.length;i++) {
//         let base = 0;
//         for (let j=i;j<nums.length;j++) {
//             base+=nums[j];
//             if (base == k) counter++;
//         }
//     }
//     return counter;
// };

// function calcNumOFSubArrs(nums, target) {
//   let sum = 0;
//   let count = 0;
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     if (sum === target) {
//       map.add(sum);
//     }

//     if (map[nums[i]] || map[sum]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(calcNumOFSubArrs([1, 1, 1], 2));

// var subarraySum = function(nums, k) {
//     let sum = 0;
//     let count = 0;
//     let map = new Map();
//     map.set(0, 1);

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         let rem = sum - k;

//         if (map.has(rem)) {
//             count += map.get(rem);
//         }
//         map.set(sum, (map.get(sum) || 0) + 1);
//     }

//     return count;
// };

function calcNumOFSubArrs(nums, target) {
  let sum = 0;
  let count = 0;
  let map = { 0: 1 };

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map[sum - target] !== undefined) {
      count += map[sum - target];
    }

    map[sum] = (map[sum] || 0) + 1;
  }

  return count;
}

console.log(calcNumOFSubArrs([1, 1, 1], 2));
