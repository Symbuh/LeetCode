/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    if (nums[0] < nums[nums.length - 1] || nums.length === 1) {
        return nums[0]
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                return nums[i + 1]
            }
        }
    }
};