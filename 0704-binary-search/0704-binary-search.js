/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while (start <= end) {
        if (nums[middle] === target) return middle;
        else if (nums[middle] > target) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    
    return -1;
};