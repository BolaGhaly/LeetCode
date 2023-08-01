/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start = 0, end, middle, i = 0, searchArrIdx;
    
    while (i < matrix.length) {
        const currArrStart = matrix[i][0];
        const currArrEnd = matrix[i][matrix[i].length - 1];
        if (currArrStart <= target && currArrEnd >= target) {
            searchArrIdx = i;
            end = matrix[i].length - 1;
        }
        
        i++;
    }
    
    if (end === undefined && searchArrIdx === undefined) return false;
    
    middle = Math.floor((start + end) / 2);
    
    while (start <= end) {
        let currMiddleValue = matrix[searchArrIdx][middle]
        if (currMiddleValue === target) return true;
        else if (currMiddleValue > target) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    
    return false;
};