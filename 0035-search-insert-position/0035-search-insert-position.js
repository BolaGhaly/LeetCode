/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while (nums[middle] !== target) {
        if (nums[middle] < target && start <= end) {
            if (nums[middle + 1] > target) return middle + 1;
            else start = middle + 1;
        }
        else if (nums[middle] > target && start <= end) {
            if (nums[middle - 1] < target) return middle;
            else end = middle - 1;
        }
        else if (start > end) return middle + 1;
        else if (nums[0] > target) return 0;
        middle = Math.floor((start + end) / 2)
    }
    
    return middle;
};