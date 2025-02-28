// --------- InEfficient Solution ------ TLE error ----

// function bestTimeToBuyAndSell(arr) {
//   let maxProfit = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let profit = arr[j] - arr[i];
//       if (profit > maxProfit) {
//         maxProfit = profit;
//       }
//     }
//   }
//   return maxProfit;
// }
// console.log(bestTimeToBuyAndSell([7, 1, 5, 3, 6, 4]));
// console.log(bestTimeToBuyAndSell([7, 6, 4, 3, 1]));

// --------- Efficient Solution ------ using simple for loop ----

// function bestTimeToBuyAndSell(arr) {
//   let min_price = Infinity;
//   let maxProfit = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min_price) {
//       min_price = arr[i];
//     }
//     let profit = arr[i] - min_price;
//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }
//   }
//   return maxProfit;
// }
// console.log(bestTimeToBuyAndSell([7, 1, 5, 3, 6, 4]));
// console.log(bestTimeToBuyAndSell([7, 6, 4, 3, 1]));

// --------- Efficient Solution ------- using for of loop -----

// function bestTimeToBuyAndSell(prices) {
//   let min_price = Infinity;
//   let maxProfit = 0;
//   for (let price of prices) {
//     if (price < min_price) {
//       min_price = price;
//     }
//     let profit = price - min_price;
//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }
//   }
//   return maxProfit;
// }
// console.log(bestTimeToBuyAndSell([7, 1, 5, 3, 6, 4]));
// console.log(bestTimeToBuyAndSell([7, 6, 4, 3, 1]));

// --------- Most Efficient Solution ------- leetCode -----

// function bestTimeToBuyAndSell(prices) {
//   let buy = prices[0];
//   let maxProfit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < buy) {
//       buy = prices[i];
//     } else if (prices[i] - buy > maxProfit) {
//       // prices[i] - buy --> this evaluate profit i.e sell - buy = profit
//       maxProfit = prices[i] - buy;
//     }
//   }
//   return maxProfit;
// }
// console.log(bestTimeToBuyAndSell([7, 1, 5, 3, 6, 4]));
// console.log(bestTimeToBuyAndSell([7, 6, 4, 3, 1]));

function bestTimeBuyAndSell(prices) {
  let buy = prices[0];
  let maxProfit = 0;
  let profit;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }
    profit = prices[i] - buy;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}
console.log(bestTimeBuyAndSell([7, 1, 5, 3, 6, 4]));
