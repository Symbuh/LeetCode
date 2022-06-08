/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    /*
        We need to generate all permutations and I'm forgetting what alrogithim I used to solve this before 
        
        I think a recursive solution works really well here and just add the perms to a memo. 
        
        We can also try to iteratively build this with a decision tree
    */
    
    let output = new Set();
    
    let generatePermsFromStartingNumber = (remaining, currentBucket) => {

        
        // console.log(`CurrentBuckeet: ${currentBucket} remaining ${remaining}`)
        if (currentBucket.length === nums.length) {
//             if (remaining.length === 0) {
                
//             }
            // console.log('adding a bucket to our output');
            output.add(currentBucket);
            return;
        } 
        
        
        for (let i = 0; i < remaining.length; i++) { 
            // console.log(`After concat: ${currentBucket.concat(remaining[i])}`)
            generatePermsFromStartingNumber([...remaining.slice(0, i), ...remaining.slice(i+1)], currentBucket.concat(remaining[i]));
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        generatePermsFromStartingNumber([...nums.slice(0, i), ...nums.slice(i + 1)], [nums[i]]);
    }
    
    
    // console.log(`Output: ${output}`);
    return Array.from(output);
};