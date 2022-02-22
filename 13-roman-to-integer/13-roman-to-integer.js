/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    /*
        1 iterate through all the didgets 
            - On each iteration 
            
        Input: roman numeral
        Output: integer string
        Constraints: String length is 15
        Edge Cases: 4 and 9, 40 and 90, 400 and 900
    */
    let memo = {
        I: 1,
        V: 5, 
        X: 10, 
        L: 50, 
        C: 100, 
        D: 500, 
        M: 1000
    }
    
    let output = 0;
    
    for (let i = s.length - 1; i > -1; i--) {
        if (i === s.length - 1 || memo[s[i]] >= memo[s[i + 1]]) {
            output = output + memo[s[i]]
        } else {
            output = output - memo[s[i]]
        }
    }
    
    return output
    
};