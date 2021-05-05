/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    if (nums.length <= 1) {
        return result
    } 
    let mySet = new Set();
    for (let number of nums) {
        if (mySet.has(number)) {
            result.push(number);
        }
        mySet.add(number);
    }
    return result;
};