/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const arrObj = {};
    for (let num of arr) {
        if (arrObj[num / 2] || arrObj[num * 2]) return true;
        arrObj[num] = true;
    }
    
    return false;
};