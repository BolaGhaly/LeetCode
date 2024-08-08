/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let newHaystackArr = [];
    
    // haystack.length = 9
    // needle.length = 3
    // sadbutsad
    // i
    // sad
    // adb
    // dbu
    // but
    // uts
    // tsa
    // sad
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        newHaystackArr[i] = haystack.substring(i, i + needle.length);
    }
    
    for (let i = 0; i < newHaystackArr.length; i++) {
        if (newHaystackArr[i] === needle) return i;
    }
    
    return -1;
};