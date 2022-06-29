/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    /*
        There are going to be multiple ways to solve this probelm
        
        Here's some rules for our iteration
        1. A negative number is not a good start for our subarray
        2. Once we find a decent starting point, how do we know when to stop checking
        for a larger subarray? 
            - I guess we don't for now, we just iterate through to the end of the subarray
    */
//     if (nums.length === 1) {
//         return nums[0]
//     }
    
//     let output = -Number.MAX_VALUE
//     let largest = output
    
//     let findMaxSub = (total, index) => {
//         let max = -Number.MAX_VALUE
//         for (let i = index; i < nums.length; i++) {
//             total = total + nums[i]
            
//             if (total > max) {
//                 max = total
//             }
//         }
        
//         if (max > output) {
//             output = max
//         }
//     }
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) {
//             findMaxSub(0, i)
//         }
        
//         if (nums[i] > largest) {
//             largest = nums[i]
//         }
//     }
    
//     if (output === -Number.MAX_VALUE) {
//         return largest
//     } 
    
//     return output
    
    /*
        My last solution was way too slow, we should only have to go through this array once tbh
    */
    
    let tot = 0; 
    let output = -Number.MAX_VALUE;
    
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && tot + nums[i] < nums[i]) {
            tot = nums[i]
        } else {
            tot = tot + nums[i]
        }    
        
        if (tot > output) {
            output = tot
        }
    }
    
    return output;
    
    
};