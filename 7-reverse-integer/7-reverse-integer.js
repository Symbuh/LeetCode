/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reverseX = 0;
    var sign = x < 0;
    // Remove the negative once we've stored our sign
    x = Math.abs(x);
    
    while (x) {
        // Simple didgit manipulation I need to try to implement 
        // more of these on my own without use of strings
        reverseX = reverseX * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    
    if (reverseX < (Math.pow(2, 31) * -1) || reverseX > Math.pow(2, 31) - 1){
        return 0;
    } 
    return sign ? -reverseX : reverseX
};