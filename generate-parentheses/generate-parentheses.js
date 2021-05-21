/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    /*
        I: int N 
        O: Array of strings (parens combinations)
        C: n >= 1 && n <= 8
        E: none within the range we are constrained to
        
        
        We need to track open and close parenthases
            - We cannot end with an open parenthesis
        
        We can either add an open parens or a closed 
        parens at each step
        
        Length of each output is n*2
            Start with an open parens
            pass both an open and a close parens into
            the parent function
            
            track number of opens added so we know when 
            to stop adding them (saves time complexity)
    */
    if (n === 1) {
        return ['()'];
    }
    let output = [];
    
    let generateSolutions = (count, str, nRemaining) => {
        if (str.length > n * 2 || count < 0) {
            return;
        }
        if (count === 0 && str.length === n*2) {
            output.push(str);
            return;   
        } else {
            if (count === 0) {
                if (nRemaining > 0) {
                    generateSolutions(count + 1, str + '(', nRemaining--);
                } else {
                    return
                }
            } else {
                generateSolutions(count + 1, str + '(', nRemaining--);
                generateSolutions(count - 1, str + ')', nRemaining);
            }
        }
        
    }
    generateSolutions(1, '(', n);
    return output;
};