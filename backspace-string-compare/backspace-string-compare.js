/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var backspaceCompare = function(s, t) {
    let helper = (string) => {
        let s = '';
        let del = 0;
        for (let i = string.length; i >= 0; i--) {
            if (string[i] === '#') {
                del += 1;
            } else {
                if (del > 0) {
                    del--;
                } else {
                    s = string[i] + s;
                }
            }
        }
        return s;
    }
    // let newS = helper(s);
    // let newT = helper(t);
    // if (newS === newT) {
    //     return true;
    // } 
    if (helper(s) === helper(t)) {
        return true;
    }
    return false;
};