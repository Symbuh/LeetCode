/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let curr = ''
    let longest = 0
    
    if (s.length === 1) {
        return 1
    }
    
    for (let i = 0; i < s.length; i++) {
        /*
            This solution could deffinately be optomized. 
            Memory usage is scoring very low
        */
        if (!curr.includes(s[i])) {
           curr = curr + s[i]
            if (longest < curr.length) {
                longest = curr.length
            }
        } else {
            if (longest < curr.length) {
                longest = curr.length
            }
            curr = curr.split(s[i])[curr.split(s[i]).length - 1] + s[i]
        }
    }
    return longest
};