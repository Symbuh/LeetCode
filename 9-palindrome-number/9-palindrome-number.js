/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    x = x.toString();
    let subStr1, subStr2;
    subStr1 = x.slice(0, Math.floor(x.length / 2))
    subStr2 = x.slice(Math.ceil(x.length) / 2, x.length)
    
    if (subStr1.length === subStr2.length) {
        if (subStr1 === subStr2.split('').reverse().join('')) {
            return true
        } 
    } else {
        subStr2 = subStr2.slice(1, subStr2.length) 
        if (subStr1 === subStr2.split('').reverse().join('')) {
            return true
        }
    }
    
    return false;
};