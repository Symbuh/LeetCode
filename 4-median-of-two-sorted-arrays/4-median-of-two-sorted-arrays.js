/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2).sort((first, second) => {
        return first - second;
    });
    
    let median;
    let midPoint;
    // Not sure if we need to floor this 
    if ((nums1.length) % 2 === 0) {
        
        midPoint = Math.floor((nums1.length - 1 ) / 2);
        median = (nums1[midPoint] + nums1[midPoint + 1]) / 2;
    } else {
        // Prolly need to floor this or something though.
        midPoint = Math.floor((nums1.length - 1) / 2);
        median = nums1[midPoint];
    }
    
    return median;
};