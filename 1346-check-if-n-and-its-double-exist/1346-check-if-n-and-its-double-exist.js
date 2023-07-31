/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let arrObj = {};
    
    for (let i = 0; i < arr.length; i++) {
        arrObj[arr[i]] = (arrObj[arr[i]] || 0) + 1;
    }
        
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        if (((currNum / 2) in arrObj || (currNum * 2) in arrObj) && currNum !== 0) return true;
        if (currNum === 0 && arrObj[currNum] > 1) return true;
    }
    
    return false;
};