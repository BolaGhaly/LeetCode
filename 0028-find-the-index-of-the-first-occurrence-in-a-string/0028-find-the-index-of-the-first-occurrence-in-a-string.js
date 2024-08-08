/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let tempStr = haystack.substring(i, i + needle.length);
        if (tempStr === needle) return i;
    }
    
    return -1;
};