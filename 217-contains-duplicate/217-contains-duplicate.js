/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let memo = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]] !== undefined) {
            return true;
        } else {
            memo[nums[i]] = i
        }
    }
    
    return false;
};