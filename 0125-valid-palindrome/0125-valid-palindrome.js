/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const trimStr = s.trim();
    if (trimStr.length === 0) return true;
    
    let i = 0;
    let j = trimStr.length - 1;
    let isCharAlphanumeric = /[a-zA-Z0-9]/;
    let leftChar = trimStr.charAt(i).toLowerCase();
    let rightChar = trimStr.charAt(j).toLowerCase();

    while (i < j) {
        console.log(i,j, leftChar, rightChar)
        if (!isCharAlphanumeric.test(leftChar)) i++;
        if (!isCharAlphanumeric.test(rightChar)) j--;
        
        if (isCharAlphanumeric.test(leftChar) 
            && isCharAlphanumeric.test(rightChar)
            && leftChar !== rightChar) {
            return false;
        } else if (isCharAlphanumeric.test(leftChar) 
            && isCharAlphanumeric.test(rightChar)
            && leftChar === rightChar) {
            i++;
            j--;
        }
        
        leftChar = trimStr.charAt(i).toLowerCase();
        rightChar = trimStr.charAt(j).toLowerCase();
    }
    
    return true;
};