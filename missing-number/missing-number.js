/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a, b) => {
        if (a < b) {
            return -1;
        } 
        if (b > a) {
            return 1;
        }
        return 0;
    });
    console.log(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
};