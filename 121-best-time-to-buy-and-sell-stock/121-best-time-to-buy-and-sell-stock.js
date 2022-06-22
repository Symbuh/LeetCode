/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let diff = 0
    let min = Infinity;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        
        if (prices[i] - min > diff) {
            diff = prices[i] - min
        }
    }
    
    return diff;
};