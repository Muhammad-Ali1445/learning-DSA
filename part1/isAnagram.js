// ----------- less Optimized Solution -----------------

// function isAnalgram(str1, str2) {
//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");
//   return str1 === str2;
// }
// console.log(isAnalgram("anagram", "nagaram"));
// console.log(isAnalgram("rat", "car"));

// ----------- less Optimized Solution -----------------

// function isAnalgram(s, t) {
//   s = s.split("").sort();
//   t = t.split("").sort();

//   if (s.length !== t.length) return false;

//   for (var i = 0; i < s.length; i++) {
//     if (s[i] !== t[i]) return false;
//   }

//   return true;
// }
// console.log(isAnalgram("rat", "car"));

// ----------- Optimized Solution -----simple for loop------------

// function isAnalgram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let count = {};
//   for (let i = 0; i < str1.length; i++) {
//     count[str1[i]] = (count[str1[i]] || 0) + 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     if (!count[str2[i]]) {
//       return false;
//     }
//     count[str2[i]]--;
//   }
//   return true;
// }
// console.log(isAnalgram("anagram", "nagaram"));
// console.log(isAnalgram("rat", "car"));

// ----------- Optimized Solution -----using for of loop ------------

function isAnalgram(str1, str2) { 
  if (str1.length !== str2.length) return false;
  let count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true;
}
console.log(isAnalgram("anagram", "nagaram"));
console.log(isAnalgram("rat", "car"));
