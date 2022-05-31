// 389. Find the Difference.ts
function findTheDifference(s: string, t: string): string {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== s[i]) return t[i];
    }
    return "";
};

// discussion
// https://leetcode.com/problems/find-the-difference/discuss/568873/1-line-JS-slow-solution
// js

// var findTheDifference = function (s, t) {
//     let letters = s.split('').sort()
//     return t.split('').sort().find((char, i) => char !== letters[i])
// };