/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    /*
        this is pretty slow I think 
        
        We shouldn't have to sort it we just add each value to a memo as we walk through it 
        
        Maybe memoization is a core concept of programming
    */
    
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