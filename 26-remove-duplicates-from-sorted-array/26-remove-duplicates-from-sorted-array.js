/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prev = null;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === prev) {
            nums.splice(i, 1);
            i = i - 1
        }
        // We set prev to the next value on accident when calling splice here
        prev = nums[i]
    }
    
    return nums.length;
};