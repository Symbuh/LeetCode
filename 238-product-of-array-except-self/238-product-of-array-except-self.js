/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    /*
        I didn't come up with this solution on my own. 
        
        We're going to be constructing an array representing 
        every character to the left of our current index being multiplied together
        
        We will then start from the end of the array and construct our output through multiplying.
        whatever's to the right of our index to the multiplicands on the left for that particular indicie. 
    */
    
    let output = []
    let right = 1
    
    output[0] = 1
    
    for (let i = 1; i < nums.length; i++) {
        // output i is the product of all values in nums that come before nums[i]
        output[i] = nums[i-1] * output[i-1]
    }
    
    // Now we just need to repeat this process for everything to the right of or after nums[i]
    // We can multiply these with the values stored in output[i] to get the values we're looking for. 
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right
        right *= nums[i]
    }
    
    return output;
};