/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0);
    let stack = [];
    
    for(let i = 0; i < temperatures.length; i++){
    	while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
    		let j = stack.pop();
    		res[j] = i - j;
    	}
    	stack.push(i);
    }
    
    return res;
};