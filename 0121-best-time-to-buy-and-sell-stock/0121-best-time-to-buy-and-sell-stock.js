/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) return 0;
    
    let i = 0;
    let j = 1;
    let profit = 0;
    
    while (i < prices.length) {
        if (prices[i] < prices[j]) profit = Math.max(profit, prices[j] - prices[i]);
        else i = j;
        j++;
    }
    
    return profit;
};