/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
   for (let i = nums.length - 2; i >= 0; i--) {
       nums[i] = Math.max(nums[i + 1], i + 2 < nums.length ? nums[i] + nums[i + 2]: nums[i])
   }
    return nums[0];
};