/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        let middle = Math.floor((start + end) / 2);
        let firstBadVersion = false;
        
        while (firstBadVersion === false && start <= end) {
            // search top half
            if (isBadVersion(middle) === false) {
                start = middle + 1;
                middle = Math.floor((start + end) / 2);
            } 
            // first bad version
            else if (isBadVersion(middle - 1) === false && isBadVersion(middle) === true) {
                firstBadVersion = true;
                return middle;
            }
            // search bottom half
            else if (isBadVersion(middle) === true) {
                end = middle - 1;
                middle = Math.floor((start + end) / 2);
            }
        };
        
        return middle;
    };
};