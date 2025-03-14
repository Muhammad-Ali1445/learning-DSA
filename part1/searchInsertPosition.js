function searchInsertPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
console.log(searchInsertPosition([1, 3, 5, 6], 5));
console.log(searchInsertPosition([1, 3, 5, 6], 2));
console.log(searchInsertPosition([1, 3, 5, 6], 7));
