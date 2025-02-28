// ----- Method 1 ---------

// function peakIndexInMountainArray(nums) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid;
//     while (start < end) {
//       mid = Math.floor((start + end) / 2);
//       if (arr[mid] < arr[mid + 1]) {
//         start = mid + 1;
//       } else {
//         end = mid;
//       }
//     }
//     return start;
//   }
//   console.log(peakIndexInMountainArray([0, 10, 5, 2]));
//   console.log(peakIndexInMountainArray([0, 2, 1, 0]));

// --------- Method 2 ------- Optimized way ----- best understandable -----

function peakIndexInMountainArray(nums) {
  let start = 1;
  let end = nums.length - 2;
  let mid;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
      return mid;
    }

    if (nums[mid] > nums[mid - 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));


