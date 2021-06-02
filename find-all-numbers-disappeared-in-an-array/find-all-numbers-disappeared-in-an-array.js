/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    /*
        Each number in the array is within the range 1 - n
        
        Return an array containing all of the numbers which are not in the range
    */
    
    let result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            result.push(i);
        }
    }
    return result;
};