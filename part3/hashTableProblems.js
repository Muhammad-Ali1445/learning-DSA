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

// ------------- Word-Pattern ---------------

// var wordPattern = function (pattern, s) {

//   pattern = pattern.split(" ");

//   if (pattern.length !== s.length) {
//     return false;
//   }

//   let map_patt_to_s = {};
//   let map_s_to_patt = {};

//   for (let i = 0; i < s.length; i++) {
//     let patt_char = pattern[i];
//     let s_char = s[i];

//     if (map_patt_to_s.hasOwnProperty(patt_char)) {
//       if (map_patt_to_s[patt_char] !== s_char) {
//         return false;
//       }
//     } else {
//       map_patt_to_s[patt_char] = s_char;
//     }

//     if (map_s_to_patt.hasOwnProperty(s_char)) {
//       if (map_s_to_patt[s_char] !== patt_char) {
//         return false;
//       }
//     } else {
//       map_s_to_patt[s_char] = patt_char;
//     }
//   }
//   return true;
// };
// console.log(isIsomorphic("abba", "dog cat cat dog"));
// console.log(isIsomorphic("aaaa", "dog cat cat fish"));

// -------------  Next Greater Element I ---------------

// Brute Force Method 
function nextGreaterElement(arr1, arr2) {
  let resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let found = -1;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = arr2.slice(j + 1).find((element) => element > arr2[j]);
        resultArr.push(found !== undefined ? found : -1);
        break;
      }
    }
  }
  return resultArr;
}
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

// Using HashMap and stack Method 

function nextGreaterElement(nums1, nums2) {
  let map = new Map();
  let stack = [];

  for (let num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  return nums1.map((num) => map.get(num) ?? -1);
}
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
