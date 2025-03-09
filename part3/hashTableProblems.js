// ----- isHappy ----------

// function isHappy(n) {
//   let seen = new Set();
//   while (n !== 1 && !seen.has(n)) {
//     seen.add(n);
//     n = SquaresOfNums(n);
//   }
//   return n === 1;
// }

// console.log(isHappy(19));

// // helper function
// function SquaresOfNums(num) {
//   return num
//     .toString()
//     .split("")
//     .map((digit) => Number(digit) ** 2)
//     .reduce((sum, squares) => sum + squares, 0);
// }

// ----- isIsomorphic ----------

// function isIsomorphic(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let map_s_to_t = {};
//   let map_t_to_s = {};

//   for (let i = 0; i < s.length; i++) {
//     let s_char = s[i];
//     let t_char = t[i];

//     if (map_s_to_t.hasOwnProperty(s_char)) {
//       if (map_s_to_t[s_char] !== t_char) {
//         return false;
//       }
//     } else {
//       map_s_to_t[s_char] = t_char;
//     }

//     if (map_t_to_s.hasOwnProperty(t_char)) {
//       if (map_t_to_s[t_char] !== s_char) {
//         return false;
//       }
//     } else {
//       map_t_to_s[t_char] = s_char;
//     }
//   }
//   return true;
// }
// console.log(isIsomorphic("paper", "title"));
// console.log(isIsomorphic("foo", "bar"));

// ------ findMissingNumber ----Method 1-----

// function findMissingNumber(nums) {
//   let map = {};

//   for (let num of nums) {
//     map[num] = true;
//   }

//   for (let i = 0; i <= nums.length; i++) {
//     if (!map.hasOwnProperty(i)) {
//       return i;
//     }
//   }
// }
// console.log(findMissingNumber([3, 0, 1]));

// // ------ findMissingNumber ----Method 2 -----

// function findMissingNumber(arr) {
//     let range = arr.length;
//     let expectedSum = 0;
//     let actualSum = 0;
//     for (let i = 0; i <= range; i++) {
//         expectedSum += i;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         actualSum += arr[i];
//     }
//     let missingNum = expectedSum - actualSum;
//     return missingNum;
//   }
//   console.log(findMissingNumber([3, 0, 1]));