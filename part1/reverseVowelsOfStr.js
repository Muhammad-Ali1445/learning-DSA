// 0 ----------- less Optimized Solution -----------------

function reverseVowels(str) {
  let vowelsChar = [];
  let vowelsIndices = [];
  let vowels = "aeiouAEIOU";
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      vowelsIndices.push(i);
      vowelsChar.push(arr[i]);
    }
  }

  vowelsChar.reverse();

  for (let i = 0; i < vowelsIndices.length; i++) {
    arr[vowelsIndices[i]] = vowelsChar[i];
  }
  return arr.join("");
}
console.log(reverseVowels("IceCreAm"));

// ----------- Both 1 & 2 are Most Optimized Solutions --little bitdifference ---------------

// 1 ----------- Most Optimized Solution -----------------

function reverseVowels(str) {
  let left = 0;
  let right = str.length - 1;
  const vowels = "aeiouAEIOU";
  const arr = str.split("");

  while (left < right) {
    if (!vowels.includes(arr[left])) {
      left++;
      continue;
    }
    if (!vowels.includes(arr[right])) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}
console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));

// 2 ----------- Most Optimized Solution ----leetCode-------------

function reverseVowels(str) {
  let left = 0;
  let right = str.length - 1;
  const vowels = new Set("aeiouAEIOU");
  const arr = str.split("");

  while (left < right) {
    if (!vowels.has(arr[left])) {
      left++;
      continue;
    }
    if (!vowels.has(arr[right])) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}
console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));


