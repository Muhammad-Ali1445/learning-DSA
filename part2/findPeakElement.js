// ------- Method using boundary checks ------

// function peakElementIndex(nums) {
//   let start = 0;
//   let end = nums.length - 1;
//   let mid;
//   while (start < end) {
//     mid = Math.floor(start + (end - start) / 2);

//     if (
//       (mid === 0 || nums[mid - 1] < nums[mid]) &&
//       (mid === nums.length - 1 || nums[mid] > nums[mid + 1])
//     ) {
//       return mid;
//     }

//     if (nums[mid] < nums[mid + 1]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return start;
// }
// console.log(peakElementIndex([1, 2, 3, 1]));
// console.log(peakElementIndex([1, 2, 1, 3, 5, 6, 4]));

// ------- Method without boundary checks --- Effective method---

function peakElementIndex(nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}
console.log(peakElementIndex([1, 2, 3, 1]));
console.log(peakElementIndex([1, 2, 1, 3, 5, 6, 4]));
