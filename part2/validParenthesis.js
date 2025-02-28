// function validParenthesis(str) {
//   const mapping = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   const stack = [];
//   for (let char of str) {
//     if (mapping[char]) {
//       const topElement = stack.length ? stack.pop() : "#";
//       if (topElement !== mapping[char]) {
//         return false;
//       }
//     } else {
//       stack.push(char);
//     }
//   }
//   return stack.length === 0;
// }
// console.log(validParenthesis("()[]{}"));

function validParenthesis(str) {
  let stack = [];
  for (let char of str) {
    if (char == "(") {
      stack.push(")");
    } else if (char == "[") {
      stack.push("]");
    } else if (char == "{") {
      stack.push("}");
    } else {
      if (stack.length === 0 || char != stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(validParenthesis("()[]{}"));
