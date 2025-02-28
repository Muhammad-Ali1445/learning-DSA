//  ----------- Not Optimized Solution -------

function isPalindrome(str) {
  let withoutAlphaNum = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let reversedStr = withoutAlphaNum.split("").reverse().join("");
  return withoutAlphaNum === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

//  ----------- Most Optimized Solution ----leetCode-------------

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
