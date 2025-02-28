// --------- Both are good solution -------------

function fizzBuzz(num) {
  let resultArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      resultArr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      resultArr.push("Fizz");
    } else if (i % 5 == 0) {
      resultArr.push("Buzz");
    } else {
      resultArr.push(i);
    }
  }
  return resultArr;
}
console.log(fizzBuzz(15));

// --------- This one is Smart solution -------------

const fizzBuzz = (n) => {
  let resltArr = [];
  for (let i = 1; i <= n; i++) {
    let string = "";
    if (i % 3 === 0) string += "Fizz";
    if (i % 5 === 0) string += "Buzz";
    if (string === "") string += i;
    resltArr.push(string);
  }
  return resltArr;
};
console.log(fizzBuzz(15));
