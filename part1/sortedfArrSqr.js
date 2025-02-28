// -------Not In-place sorting ----------

// function sqrOfSortedArr(arr) {
//   let newArr = [];
//   arr = arr.sort((a, b) => a + b);
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * arr[i]);
//   }
//   return newArr;
// }
// console.log(sqrOfSortedArr([-4, -1, 0, 3, 10]));
// console.log(sqrOfSortedArr([-7, -3, 2, 3, 11]));

// ------- In-place sorting ----------

// function sqrOfSortedArr(arr) {
//   arr = arr.sort((a, b) => a + b);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
//   }
//   return arr;
// }
// console.log(sqrOfSortedArr([-4, -1, 0, 3, 10]));
// console.log(sqrOfSortedArr([-7, -3, 2, 3, 11]));

// ------- In-place sorting ---- Using two pointer Approach --Optimal----

function sqrOfSortedArr(arr) {
  let left = 0;
  let right = arr.length - 1;
  let resultArr = Array(arr.length);
  let index = arr.length - 1;

  while (left <= right) {
    let leftSqr = arr[left] * arr[left];
    let rightSqr = arr[right] * arr[right];
    if (leftSqr > rightSqr) {
      resultArr[index] = leftSqr;
      left++;
    } else {
      resultArr[index] = rightSqr;
      right--;
    }
    index--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = resultArr[i];
  }
  return arr;
}
console.log(sqrOfSortedArr([-4, -1, 0, 3, 10]));
