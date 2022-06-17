/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    // Start with a direct check 
    if (nums[target] === target) {
        return target;
    }
    
    // Logic to check for a pivot
    let findPivot = (nums) => {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                return i;
            }
        }
        
        return -1;
    }
    
    let pivot = findPivot(nums);
    
    if (pivot !== -1) {
        /*
            This is where we can get really fancy to go as directly to our target as possible. 
        
            if the target is greater than our pivot index it will reside on the left side of our zero
                its index will be target - pivot.
            
            if the target is less than our pivot it will be on the right
                its index will be pivot + target
            
        */
        
        if (target > pivot) {
            if (nums[target - pivot] === target) {
                return (target - pivot)
            }
        } else {
            if (nums[target + pivot] === target) {
                return target + pivot
            }
        }
    }
    
    // If all direct checks fail we will try to check the entire array. 
    // I should aim to remove this logic from the problem
    
    console.log('Im about to morb!')
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    
    return -1;
    
    
    
};