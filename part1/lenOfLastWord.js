// ----------  Both are same code -------------------

// function lengthOfLastWord(str) {
//   str = str.trim(" ");
//   let tokens = str.split(" ");
//   let lastWord;
//   let lastWordLen;
//   for (let i = 0; i < tokens.length - 1; i++) {
//     lastWord = tokens[tokens.length - 1];
//     lastWordLen = lastWord.length;
//   }
//   return lastWordLen;
// }
// console.log(lengthOfLastWord("  Hello    World  "));



function lengthOfLastWord(str) {
  let tokens = str.trim(" ").split(" ");
  for (let i = 0; i < tokens.length; i++) {
  return tokens[tokens.length - 1].length;
  }
}
console.log(lengthOfLastWord("  Hello    World  "));
