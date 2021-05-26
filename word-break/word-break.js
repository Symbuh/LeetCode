/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    /*
        Given a string s and a dictionary of strings wordDict, 
        
        return true if s can be segmented into a space-separated sequence of one or more
        dictionary words
        
        I: string and object/array of substrings
        O: Boolean
        C: All strings in dictionary are unique and consist of lowercase letters
        E: If there are multiple solutions wait wtf this is so easy
        
        1. Generate all possible words from the dictionary that can cover 
        the first word
            - Memoize the split/spliced version of the string
            - Repeat this process until the end of the string is reached? 
            
        Now what could we store to make this faster? 
    */
    // wordDict = wordDict.sort((firstEL, secondEL) => {
    //     if (firstEL.length > secondEL.length) {
    //         return -1;
    //     }
    //     if (secondEL.length > firstEL.length) {
    //         return 1;
    //     }
    //     return 0;
    // })
    let memo = {}
    
    let isPossible = (str) => {
        console.log(memo);
        if (memo.hasOwnProperty(str)) {
            // console.log('outhere');
            return memo.str;
        }
        if (str === '') {
            return true;
        }
        for (let word of wordDict) {
            if(str.startsWith(word)) {
                let doesItWork = isPossible(str.substring(word.length));
                memo[str] = doesItWork;
                if (true === doesItWork) {
                    return true;
                }
            }
        }
        // Save the memo at this step as falsy (we save as large of a substring as possible);
        memo[str] = false;
        return false;
    }
    
    return isPossible(s);
    
    // let solved = false;
    // let generateSolutions = (str) => {
    //     if (solved === true || str === '') {
    //         return true;
    //     }
    //     for (let word of wordDict) {
    //         if (word === str) {
    //                 solved = true;
    //                 return true;
    // 
    //         }
    //         if(str.slice(0, word.length) === word) {
    //             generateSolutions(str.slice(word.length, str.length));
    //         }
    //     }
    //     if (solved === false) {
    //         return false
    //     } else {
    //         return true;
    //     }
    // }
    // return generateSolutions(s);
};