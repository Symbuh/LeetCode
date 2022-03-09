/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let inputs = {
        open: ['(', '[', '{'],
        close: [')', ']', '}']
    }
    
    let depthStack = [];
    let lastOpening;
    let bracketIndex; 
    let top = -1;
    let n = s.length;
    
    
    if (n % 2 !== 0) {
        return false;
    }
    
    for (let index = 0; index < n; index++) {
        if (inputs['open'].includes(s[index])) {
            depthStack.push(s[index]);
            top++;
        } else {
            if (top === -1) {
                // Hitting this case means we started with a closing character while 
                // no opening brackets are in the stack
                return false;
            }
            
            top--;
            lastOpening = depthStack.pop();
            bracketIndex = inputs.open.indexOf(lastOpening);
            if (s[index] !== inputs.close[bracketIndex]) {
                return false;
            }
        }
    }
    
    // This handles the case of an opening bracket that hasn't closed
    if (top !== -1) {
        return false;
    }
    
    return true;
};