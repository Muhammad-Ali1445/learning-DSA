function reverseStr(strArr) {
  let left = 0;
  let right = strArr.length - 1;
  while (left < right) {
    let temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;
    left++;
    right--;
  }
  return strArr;
}
console.log(reverseStr(["h", "e", "l", "l", "o"]));
