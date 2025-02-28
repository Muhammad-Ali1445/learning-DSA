// function lenOfLongConsecSeq(nums) {
//   let set = new Set();
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (set[nums[i]] === undefined) {
//       set[nums[i]] = 1;
//     }
//     set[nums[i]] = count++;
//   }
//   return set;
// }
// console.log(lenOfLongConsecSeq([100, 4, 200, 1, 3, 2]));

function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
}

// Example usage
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
