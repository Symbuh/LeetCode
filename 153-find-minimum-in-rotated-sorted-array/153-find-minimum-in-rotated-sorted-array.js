/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    // if (nums[0] < nums[nums.length - 1] || nums.length === 1) {
    //     return nums[0]
    // } else {
    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] > nums[i + 1]) {
    //             return nums[i + 1]
    //         }
    //     }
    // }
    
    /*
        The above solution will have cases where it doesn't run in logarithmic time.
        
        To make this solution truly logarithmic we need to determine whether we should check the left or right side of the 
        array before iterating:
    */
    
    if (nums[0] < nums[nums.length - 1] || nums.length === 1) {
        return nums[0] 
    }
    let mid = Math.floor(nums.length / 2)
    let left = 0, right = nums.length - 1
    
    
    // You can achieve logarithmic time by implementing binary search
    // Split the array in half over and over again to find the range containing the lowest
    // value
    while (right >= left) {
        
        mid = Math.floor(left + (right - left) / 2)
        
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1]
        }
        
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid]
        }
        
        // If the value at mid is greater then the first value in nums
        // This means the least element is still somewhere to the right
        if (nums[mid] > nums[0]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    
};