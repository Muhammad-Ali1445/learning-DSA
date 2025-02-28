function mergeStringAlternately(str1, str2) {
  let result = "";
  let i = 0;
  let j = 0;

  while (i < str1.length || j < str2.length) {
    result += str1[i];
    result += str2[j];
    i++;
    j++;
    if (str1[i] === undefined) {
      result += str2[j];
    }
    if (str2[j] === undefined) {
      result += str1[i];
    }
  }
  return result;
}
console.log(mergeStringAlternately("abc", "pqr"));
console.log(mergeStringAlternately("ab", "pqrs"));


function mergeStringAlternately(str1, str2) {
    let result = "";
    let i = 0, j = 0;
  
    while (i < str1.length || j < str2.length) {
      if (i < str1.length) {
        result += str1[i];
        i++;
      }
      if (j < str2.length) {
        result += str2[j];
        j++;
      }
    }
  
    return result;
  }
  
  console.log(mergeStringAlternately("abc", "pqr"));  
  console.log(mergeStringAlternately("ab", "pqrs")); 
  