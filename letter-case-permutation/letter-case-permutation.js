/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let magic = {};
    let lastKey = 0;
    let check = true;
    for (let i = 0; i < S.length; i++) {
        if(isNaN(parseInt(S[i]))) {
            check = false
        }
    }
    if (check === true) {
        let output = [];
        output.push(S);
        return output;
    }
    let inner = (index) => {
        if (!S[index]) {
            if(lastKey !== index - 1) {
                if (lastKey === 0 && Object.keys(magic).length === 0) {
                    magic[index - 1] = [];
                    magic[index - 1].push(S);
                    lastKey = index - 1;
                    return
                } else {
                    magic[index - 1] = [];
                let slice = S.slice(lastKey + 1, index);
                for(let i = 0; i < magic[lastKey].length; i++) {
                    magic[index - 1].push(magic[lastKey][i] + slice.toString());
                }
                lastKey = index - 1;
                }
            }
            return;
            
        }
        if (isNaN(parseInt(S[index]))) {
            if (Object.keys(magic).length === 0) {
                magic[index] = [];
                magic[index].push(S.slice(0, index + 1).toLowerCase())
                magic[index].push(S.slice(0, index + 1).toUpperCase())
                lastKey = index;
            } else {
                magic[index] = [];
                let mySlice = S.slice(lastKey + 1, index + 1);
                let upper = mySlice.toUpperCase();
                let lower = mySlice.toLowerCase();
                for(let i = 0; i < magic[lastKey].length; i++) {
                    magic[index].push(magic[lastKey][i] + upper);
                    magic[index].push(magic[lastKey][i] + lower);
                }
                lastKey = index;
            }
        } else {
            if (Object.keys(magic).length > 0) {
                magic[index] === [];
            }
        }
        inner(index + 1);
    }
    inner(0);
    return magic[lastKey];
    /*
        After exiting inner function we want to append the rest of the numbers to our string.
    */
};
