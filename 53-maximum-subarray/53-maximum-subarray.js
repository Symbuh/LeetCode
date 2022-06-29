/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
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