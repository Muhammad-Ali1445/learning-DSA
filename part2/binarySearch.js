function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
