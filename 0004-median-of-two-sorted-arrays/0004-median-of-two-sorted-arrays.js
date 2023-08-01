/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newSortedArr = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            newSortedArr.push(nums1[i]);
            i++;
        } else if (nums1[i] > nums2[j]) {
            newSortedArr.push(nums2[j]);
            j++;
        } else {
            newSortedArr.push(nums1[i]);
            newSortedArr.push(nums2[j]);
            i++;
            j++;
        }
    }
    
    while (i < nums1.length) {
        newSortedArr.push(nums1[i]);
        i++;
    }
    
    while (j < nums2.length) {
        newSortedArr.push(nums2[j]);
        j++;
    }
        
    let start = 0;
    let end = newSortedArr.length - 1;
    let middle = Math.floor((start + end) / 2); 
    
    if (newSortedArr.length % 2 === 0) return (newSortedArr[middle] + newSortedArr[middle+1]) / 2;
    else return newSortedArr[middle];
};
