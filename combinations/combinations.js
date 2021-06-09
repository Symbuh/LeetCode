/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    /*
        
    */
    let result = [];
    
    let generateFunctions = (count, combination) => {
        let comb = combination.slice()
        if (combination.length === k) {
            result.push(comb);
        }
        for (let i = count + 1; i <= n; i++) {
            comb.push(i);
            generateFunctions(i, comb);
            comb.pop()
        }
    }
    // I'm getting a scoping issue here. I don't really understand why or
    // how to fix this kind of issue in 
    generateFunctions(0, []);
    return result;
};