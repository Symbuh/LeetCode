/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    /*
        Find a contiguous non-empty subarray within the array that
        has the largest product, and return the product 
        
        I. Array of numbers
        O. A contiguous non-empty subarray within the array that has the largest
        product
        C. numbers are -10 - 10 and the length can be very large
        E. Small lengths
        
        For each index find the largest subsequence at that index
        
        We need to be able to check what is a valid subarray 
        
        Maybe we should store the range in our memo It's pretty hard to tell though
        
        Double negatives are the case that we really need to consider
        I think that's something that is really important too
        
        THE SECRET TO DEAL WITH NEGATIVE NUMBERS IS TO STORE THE MAX AND MIN
        
        This allows us to keep track of a special negative number chain
        
        The way this algorithim is set up, if we don't generate either
        the highest or lowest number in a sequence we start over. 
    */
    let max = nums[0], currMax = nums[0], currMin = nums[0], temp;
    
    for (let i = 1; i < nums.length; i++) {
        temp = currMax;
        // set temp equal to the current max
        currMax = Math.max(nums[i], Math.max(nums[i]*currMax, nums[i]*currMin))
        /*
            Now if we can't get an increase in max by multiplying nums[i]
            by our current minimum and maximum, we start over and set our 
            current max to be simply nums[i];
        */
        currMin = Math.min(nums[i], Math.min(nums[i]*temp, nums[i]*currMin));
        // Repeat the same process with min just incase we hit a eurika with a 
        // negative number 
        /*
            The temp is important here as we've already reassigned our max 
            or restarted it. 
        */
        
        max = Math.max(max, currMax);
        // If our current max is more than our min then we override the min
    }
    
    return max;
    
};