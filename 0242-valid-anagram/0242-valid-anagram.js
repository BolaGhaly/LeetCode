/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let sObj = {};
    let tObj = {};
    
    for (let i = 0; i < s.length; i++) {
        sObj[s[i]] = (sObj[s[i]] || 0) + 1;
        tObj[t[i]] = (tObj[t[i]] || 0) + 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in tObj)) return false;
        if (sObj[s[i]] !== tObj[s[i]]) return false;
    }
    
    return true;
};