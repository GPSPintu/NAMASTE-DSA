// ✅ Problem (Short Version)
// You are given an array prices where prices[i] represents the stock price on day i.
// 👉 Choose:
// one day to buy a stock
// a later day to sell the stock
// Your goal is to get the maximum profit.
// ✅ Return the maximum profit possible.
// 👉 If no profit can be made, return 0.
// 📌 Example
// Input: [7,1,5,3,6,4]
// Output: 5
// (Buy at 1, sell at 6)
// Input: [7,6,4,3,1]
// Output: 0 (no profit possible)

var maxProfit = function(prices) {
      let maxProfit = 0;
      for (let i = 0; i < prices.length; i++) {
          for (let j = i + 1; j < prices.length; j++) {
              if ((prices[j] - prices[i]) > maxProfit) {
                  maxProfit = prices[j] - prices[i];
              }
          }
      }
      return maxProfit;
  };
  