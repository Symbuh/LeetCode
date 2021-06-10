/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    /*
        I: Integer K int N
        O: All combinations of K numbers that sum upto N
            - Only numbers 1-9 are used. 
            - Each number is only used once
            
        function (3, 7) = [[1, 2, 4]] (this is the only valid combination possible with three numbers)
        
        simulate adding one and simulate not adding one.
    */
    let result = [];
    
    let generateCombinations = (tupple, total, lastIndex) => {
        tupple = tupple.slice()
        if (tupple.length >= k) {
            if (total === n) {
                result.push(tupple);
            }
            return;
        }
        
        for (let i = lastIndex; i < 10; i++) {
            tupple.push(i);
            generateCombinations(tupple, total + i, i + 1);
            tupple.pop();
        }
    }
    
    generateCombinations([], 0, 1);
    return result;
};