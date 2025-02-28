function maxSumOfSubArr(arr) {
  let maxSum = -Infinity;
  // let newArr = [];
  let currSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum > maxSum) {
      // newArr.push(arr[i]);
      maxSum = currSum;
    }

    if (currSum < 0) {
      currSum = 0;
    }
  }
  //   return {newArr,maxSum};
  return maxSum;
}
console.log(maxSumOfSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSumOfSubArr([5, 4, -1, 7, 8]));
console.log(maxSumOfSubArr([1]));

// function maxSumOfSubArr(arr) {
//   let maxSum = arr[0];
//   let currSum = 0;
//   for (let value of arr) {
//     currSum += value;
//     if (currSum > maxSum) {
//       maxSum = currSum;
//     }

//     if (currSum < 0) {
//       currSum = 0;
//     }
//   }
//   return maxSum;
// }
// console.log(maxSumOfSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSumOfSubArr([5, 4, -1, 7, 8]));
// console.log(maxSumOfSubArr([1]));
