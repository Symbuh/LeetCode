/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let output = new Set();
    
    let generatePermsFromStartingNumber = (remaining, currentBucket) => {

        if (currentBucket.length === nums.length) {
            output.add(currentBucket);
            return;
        } 
        
        
        for (let i = 0; i < remaining.length; i++) { 
            generatePermsFromStartingNumber([...remaining.slice(0, i), ...remaining.slice(i+1)],
                                                currentBucket.concat(remaining[i]));
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        generatePermsFromStartingNumber([...nums.slice(0, i), ...nums.slice(i + 1)], [nums[i]]);
    }

    return Array.from(output);
};