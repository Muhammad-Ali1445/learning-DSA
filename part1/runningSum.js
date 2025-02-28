// ---- Taking extra Space i.e array -------
function runningSum(arr) {
  let sum = 0;
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    resultArr.push(sum);
  }
  return resultArr;
}
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

// ---- Not Taking extra Space i.e array ---- in place ---- Optimal -----

function runningSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    arr[i] = sum;
  }
  return arr;
}
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
