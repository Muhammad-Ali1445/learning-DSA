// -------- This not give right answer but i wrote this for learning ------
// the issue with that is ,it return duplicate elements but we need distinct one

// function differenceOfTwoArr(arr1, arr2) {
//   let restt1 = arr1.filter((item) => !arr2.includes(item));
//   let restt2 = arr2.filter((item) => !arr1.includes(item));

//   return [restt1, restt2];
// }
// console.log(differenceOfTwoArr([1, 2, 3], [2, 4, 6]));
// console.log(differenceOfTwoArr([1, 2, 3, 1], [2, 4, 6])); // problem is here with this method

// --------------- This is also a good method method -----------------

// function differenceOfTwoArr(arr1, arr2) {
//   let resultArr1 = [];
//   let resultArr2 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       resultArr1.push(arr1[i]);
//     }
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     if (!arr1.includes(arr2[j])) {
//       resultArr2.push(arr2[j]);
//     }
//   }
//   return [resultArr1, resultArr2];
// }
// console.log(differenceOfTwoArr([1, 2, 3], [2, 4, 6]));

// ---- Also a good approach ------ solution copy from leetCode -----

// function differenceOfTwoArr(nums1, nums2) {
//   let ans1 = new Set(nums1);
//   nums2.forEach((v) => {
//     ans1.delete(v);
//   });
//   let ans2 = new Set(nums2);
//   nums1.forEach((v) => {
//     ans2.delete(v);
//   });

//   return [[...ans1], [...ans2]];
// }
// console.log(differenceOfTwoArr([1, 2, 3], [2, 4, 6]));

// ---- Also a good approach ------ solution copy from leetCode----- simplest approach ---reqired -------

// function differenceOfTwoArr(nums1, nums2) {
//   nums1 = new Set(nums1);
//   nums2 = new Set(nums2);

//   for (let item of nums1) {
//     if (nums2.has(item)) {
//       nums1.delete(item);
//       nums2.delete(item);
//     }
//   }
//   return [Array.from(nums1), Array.from(nums2)];
// };
// console.log(differenceOfTwoArr([1, 2, 3], [2, 4, 6]));

// --------------- This is the required approach  -------- leetCode---------

function differenceOfTwoArr(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let diff1 = [...set1].filter((num) => !set2.has(num));
  let diff2 = [...set2].filter((num) => !set1.has(num));
  console.log(diff1);
  console.log(diff2);
  return [diff1, diff2];
}
console.log(differenceOfTwoArr([1, 2, 3], [2, 4, 6]));
