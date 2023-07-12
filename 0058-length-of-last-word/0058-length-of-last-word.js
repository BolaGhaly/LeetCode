/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastSpaceIdx;
    let tempS = s.trim()
    for (let i = 0; i < tempS.length; i++) if (tempS[i] === " ") lastSpaceIdx = i;

    return s.trim().split('').slice(lastSpaceIdx + 1).length;
};