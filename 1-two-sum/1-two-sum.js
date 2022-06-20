/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*
        Memoized solution
    */
    
    let memo = {}
    
    
    for (let i = 0; i < nums.length; i++) {
        memo[nums[i]] = i 
    }
    
    let diff;
    
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i]
        if (memo[diff] && i !== memo[diff]) {
            return i > memo[diff] ? [memo[diff], i] : [i, memo[diff]]
        }
    }
    
    return [-1, -1];
};