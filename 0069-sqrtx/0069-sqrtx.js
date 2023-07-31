/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let middle = Math.floor((left + right) / 2);
    
    while (left <= right) {
        if (middle * middle <= x && (middle + 1) * (middle + 1) > x) {
            return middle;
        }
        else if (middle * middle < x) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
        middle = Math.floor((left + right) / 2);
    }
};      