/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let i = 0;
    let j = 1;
    
    while (i < j && i < nums.length - 1) {
        if (nums[i] === nums[j]) return true;
        if (j === nums.length - 1) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    
    return false;
};