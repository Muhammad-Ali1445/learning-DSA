function maxAltitude(gainArr) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < gainArr.length; i++) {
    sum += gainArr[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
console.log(maxAltitude([-5, 1, 5, 0, -7]));
console.log(maxAltitude([-4, -3, -2, -1, 4, 3, 2]));
