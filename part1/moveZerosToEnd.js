// ------- In-place ---- Using two pointer Approach --- Not Optimal----
// function moveZerosToEnd(arr) {
//   let index = 0;
//   for (let curr = 0; curr < arr.length; curr++) {
//     if (arr[curr] !== 0) {
//       arr[index++] = arr[curr];
//     }
//   }

//   for (let i = index; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }
// console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
// console.log(moveZerosToEnd([0]));

// ------- In-place ---- Using two pointer Approach -- Optimal----

function moveZerosToEnd(arr) {
  let left = 0;
  for (let curr = 0; curr < arr.length; curr++) {
    if (arr[curr] !== 0) {
      [arr[curr], arr[left]] = [arr[left], arr[curr]];
      left++;
    }
  }

  return arr;
}
console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
console.log(moveZerosToEnd([0]));
