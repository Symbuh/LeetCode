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
            We need to check every single character in the string
            
            Not really sure why this isn't working. 
            an array of length 2 is returning 0
            
            It's because there was a chance that we never hit 
            our else case. 
            
            Wow there's even a case for backtracking to the 
            previous before the repeat rough
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
        console.log(curr)
    }
    return longest
};