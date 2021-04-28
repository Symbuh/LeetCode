/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let returnArray = [];
    let current = 0;
    let thing = 1;
    for (let i = 0; i < nums.length; i++) {;
        for(let j = 0; j < nums.length; j++) {
            if(j !== i){
                thing = thing*nums[j];
            }
        }
        returnArray.push(thing);
        thing = 1;
    }
    return returnArray;
};