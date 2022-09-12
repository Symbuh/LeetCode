func maxProfit(prices []int) int {
    /*
        The vars we'll need to buy and sell this are max profit and currMin
        
        We want to update currMin as we parse through the array and update max profit as we find values. 
        
        Return max profit, super simple
    */
    
    var maxProfit = 0
    var currMin = math.MaxUint32
    
    for i := 0; i < len(prices); i++ {
        if (prices[i] < currMin) {
            currMin = prices[i]
            fmt.Println(currMin)
        }
        
        if (prices[i] > currMin && prices[i] - currMin > maxProfit) {
            maxProfit = prices[i] - currMin
            fmt.Println(maxProfit)
        }
    }
    
    return maxProfit
}