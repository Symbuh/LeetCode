/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let max = nums[0], currMax = nums[0], currMin = nums[0], temp;
    
    for (let i = 1; i < nums.length; i++) {
        temp = currMax
        
        currMax = Math.max(nums[i], Math.max(nums[i]*currMax, nums[i]*currMin))
        
        currMin = Math.min(nums[i], Math.min(nums[i]*temp, nums[i]*currMin))
    
        max = Math.max(max, currMax);
    }
    
    return max;
    
};