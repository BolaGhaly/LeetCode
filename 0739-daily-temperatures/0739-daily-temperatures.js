/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let temperaturesArr = [];
    
    if (temperatures.length === 1) {
        temperaturesArr.push(0);
        return temperaturesArr;
    }
    
    let i = 0;
    let j = 1;
    
    while (j < temperatures.length) {
        if (temperatures[i] < temperatures[j]) {
            temperaturesArr.push(j - i);
            i++;
            j = i + 1;
        } else if (j === temperatures.length - 1) {
            temperaturesArr.push(0);
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    
    temperaturesArr.push(0)
    return temperaturesArr;
};