// --------- InEfficient Solution ------ TLE error ----

// function productOfArr(arr) {
//   let resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let elements = arr
//       .filter((elemet, index) => index !== i)
//       .reduce((acc, val) => acc * val, 1);
//     resultArr.push(elements);
//   }
//   return resultArr;
// }
// console.log(productOfArr([1, 2, 3, 4]));
// console.log(productOfArr([-1, 1, 0, -3, 3]));

// --------- Most Efficient Solution ------- leetCode -----

function productOfArr(nums) {
  const n = nums.length;
  let resultArr = Array(n).fill(1);
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    resultArr[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    resultArr[i] *= suffix;
    suffix *= nums[i];
  }
  return resultArr;
}
console.log(productOfArr([1, 2, 3, 4]));
console.log(productOfArr([-1, 1, 0, -3, 3]));
