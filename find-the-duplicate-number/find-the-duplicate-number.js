/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let nonDuplicates = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        let l = nonDuplicates.size;
        
        nonDuplicates.add(nums[i]);
        
        if(nonDuplicates.size === l) {
            return nums[i];
        }
    }
};