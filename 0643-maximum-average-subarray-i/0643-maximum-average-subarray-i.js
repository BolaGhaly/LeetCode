/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let tempSum = 0;
    
    for (let i = 0; i < k; i++) {
        tempSum += nums[i];
    }
    
    tempSum = tempSum / k;
    let maxAvg = tempSum;

    for (let i = k; i < nums.length; i++) {
        tempSum = ((tempSum * k) - nums[i - k] + nums[i]) / k;
        maxAvg = Math.max(tempSum, maxAvg);
    }
    
    return maxAvg;
};