function sqrt(num) {
  let start = 0;
  let end = num;
  let mid;
  let ans = 0;
  let square;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    square = mid * mid;
    if (square === num) {
      return mid;
    } else if (square < num) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}
console.log(sqrt(36));
