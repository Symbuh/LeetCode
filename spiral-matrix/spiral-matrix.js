/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    /*
        Spiral order
        1. Iterate to the right 
        2. left
        3. up
        4. down
    */
    let output = [];
    let inner = (matrix, direction) => {
        if(matrix.length === 0 || matrix[matrix.length - 1].length ===0) {
            return
        }
        if (direction === 'right') {
            for (let i = matrix[0].length - 1; i >= 0; i--) {
                output.push(matrix[0].shift());
            }
            /*
                Delete the top tuple and call next
                function
            */
            matrix.shift();
            inner(matrix, 'down');
        } else if (direction === 'left') {
            for (let i = matrix[matrix.length - 1].length - 1; i >= 0 ; i--) {
                output.push(matrix[matrix.length - 1].pop());
            }
            matrix.pop();
            inner(matrix, 'up');
        } else if (direction === 'up') {
            for (let i = matrix.length - 1; i >= 0; i--) {
                output.push(matrix[i].shift());
            }
            inner(matrix, 'right');
        } else if (direction === 'down') {
            for (let i = 0; i < matrix.length; i++) {
                output.push(matrix[i].pop()); 
            }
            inner(matrix, 'left');
        }
    }
    inner(matrix, 'right');
    return output;
}