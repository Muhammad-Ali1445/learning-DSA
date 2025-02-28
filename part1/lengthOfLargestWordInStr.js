function lengthOfLargestWOrdInStr(str) {
  let tokens = str.split(" ");
  let largestWord = tokens[0];
  let maxLength = largestWord.length;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].length > maxLength) {
      largestWord = tokens[i];
      maxLength = largestWord.length;
    }
  }
  return [largestWord, maxLength];
}
console.log(lengthOfLargestWOrdInStr("My name is Ali Munir"));
