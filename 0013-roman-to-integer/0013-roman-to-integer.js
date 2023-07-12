/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    
    let sArr = s.split('');
    let i = 0;
    let romanNum = 0;
    
    do {
        if (sArr[i] === "I" && sArr[i+1] !== undefined) {
            if (sArr[i+1] === "V" || sArr[i+1] === "X") {
                romanNum += romanObj[sArr[i+1]] - romanObj[sArr[i]]
                sArr.shift()
                sArr.shift()
            }
            else {
                console.log("1")
                romanNum += romanObj[sArr[i]]
                sArr.shift()
            }
        }
        else if (sArr[i] === "X" && sArr[i+1] !== undefined) {
            if (sArr[i+1] === "L" || sArr[i+1] === "C") {
                romanNum += romanObj[sArr[i+1]] - romanObj[sArr[i]]
                sArr.shift()
                sArr.shift()
            }
            else {
                console.log("2")
                romanNum += romanObj[sArr[i]]
                sArr.shift()
            }
        }
        else if (sArr[i] === "C" && sArr[i+1] !== undefined) {
            if (sArr[i+1] === "D" || sArr[i+1] === "M") {
                romanNum += romanObj[sArr[i+1]] - romanObj[sArr[i]]
                sArr.shift()
                sArr.shift()
            }
            else {
                console.log("3")
                romanNum += romanObj[sArr[i]]
                sArr.shift()
            }
        }
        else {
            console.log("4")
            romanNum += romanObj[sArr[i]]
            sArr.shift()
        }       
    } while (sArr.length !== 0)
    
    return romanNum;
};