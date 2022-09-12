func maxProfit(prices []int) int {
    var maxProfit = 0
    var currMin = math.MaxUint32
    
    for i := 0; i < len(prices); i++ {
        if (prices[i] < currMin) {
            currMin = prices[i]
        }
        
        if (prices[i] > currMin && prices[i] - currMin > maxProfit) {
            maxProfit = prices[i] - currMin
        }
    }
    
    return maxProfit
}