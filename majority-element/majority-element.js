/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort()
    for (let i = 0; i <= Math.floor(nums.length/2); i++) {
        if (nums[i] === nums[Math.floor(i + nums.length / 2)]) {
            return nums[i];
        }
    }
};