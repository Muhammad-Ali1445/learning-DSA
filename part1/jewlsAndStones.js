// --------- Not Optimal Solution -------

// function jewlsAndStones(jewels, stones) {
//   let count = 0;
//   for (let i = 0; i < stones.length; i++) {
//     for (let j = 0; j < jewels.length; j++) {
//       if (stones[i] === jewels[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(jewlsAndStones("aA", "aAAbbbb"));

// --------- Optimal Solution -------

function jewlsAndStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
}
console.log(jewlsAndStones("aA", "aAAbbbb"));
