/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 0;
    let end = num;
    let middle = Math.floor((start + end) / 2);
    
    while (start <= end) {
        if (middle * middle === num) return true;
        else if (middle * middle > num) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    
    return false;
};