/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    /*
        Every number in the array appears twice except for one. 
    */
    if (nums.length === 1) {
        return nums[0];
    }
    nums = nums.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    
    for (let i = 1; i < nums.length; i++) {
        if(i % 2 !== 0 && nums[i] !== nums[i-1]) {
            // console.log(`Returning at i=${i} comparing ${nums[i]} with ${nums[i - 1]}`);
            return nums[i - 1];
        } 
        if (i % 2 === 0 && nums[i] !== nums[i + 1]) {
            //console.log(`returning at i=${i}`);
            return nums[i];
        }
    }
    return 'ohJeez';
};