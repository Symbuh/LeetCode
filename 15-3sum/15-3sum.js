/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
    We basically just implement 2 sum here and memoize strinified versions of each array
    
    I wonder if the runtime of stringifying the array is going to do anything to hurt my solution
*/

var threeSum = function(nums) {
    let inputSet = new Set(nums);
    
    let usedTriplets = {}
    
    let findTwoSumsWithoutTarget = (input, target) => {
        let memo = {}, output = [], triplet
        
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== target) {
                let diff = target + input[i]

                if (memo[0 - diff] && memo[0 - diff] !== target) {
                    triplet = [memo[0 - diff], input[i], target].sort()
                    
                    if (!usedTriplets[triplet.toString()]) {
                        output.push([memo[0 - diff], input[i], target])
                    }
                    
                    usedTriplets[triplet.toString()] = true
                }

                memo[input[i]] = input[i]
            }
        }
        return output;
    }
    
    let output = [], zeroesCount = 0, counted = false
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroesCount++
        }
        
        if (zeroesCount === 3 && !counted) {
            output.push([0, 0, 0])
            counted = true
        }
        
        output = findTwoSumsWithoutTarget(nums, nums[i]).concat(output)
    }
    console.log(output)
    
    return output;
};