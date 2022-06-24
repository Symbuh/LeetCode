/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = []
    let right = 1
    
    output[0] = 1
    
    for (let i = 1; i < nums.length; i++) {
        output[i] = nums[i-1] * output[i-1]
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right
        right *= nums[i]
    }
    
    return output;
};