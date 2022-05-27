// 383. ransomNote.js
// Speed: faster than 40.01% 
// Memory: less than 53.37%
let canConstruct = function(ransomNote, magazine) {
    // count each letter in ransomNote seperately then compare in magazine
    let ransomLetters = {}
    for (letter of ransomNote){
        if (!ransomLetters[letter]) ransomLetters[letter] = 1;
        else ransomLetters[letter] += 1;
    }
    let magazineLetters = {}
    for (letter of magazine){
        if (!magazineLetters[letter]) magazineLetters[letter] = 1;
        else magazineLetters[letter] += 1;
    }
    for (letter in ransomLetters){
        if (!magazineLetters[letter] || ransomLetters[letter] > magazineLetters[letter]) return false;
    }
    return true;
};

console.log(canConstruct("aa","aab"))

// Discussion Solution
// https://leetcode.com/problems/ransom-note/discuss/1921799/JS-easy-and-fast-solution-(faster-than-91.53)

// var canConstruct = function(ransomNote, magazine) {
//     let map = {};
//     for(let ch of magazine){
//         if(!(ch in map))
//             map[ch] = 0;
//         map[ch]++;
//     }
//     for(let ch of ransomNote){
//         if(!(ch in map) || map[ch] <= 0)
//             return false;
//         if(ch in map)
//             map[ch]--;
//     }
//     return true;
// };