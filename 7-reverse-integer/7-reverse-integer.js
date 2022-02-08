/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative = false;
    
    if (x < 0) {
        negative = true;
    }
    
    x = +String(Math.abs(x)).split("").reverse().join("");
    
    if (negative === true) {
        x = "-" + x;
    }
    
    x = Number.parseInt(x);
    
    if (x < (Math.pow(2, 31) * -1) || x > Math.pow(2, 31) - 1) return 0;
    
    return x;
};