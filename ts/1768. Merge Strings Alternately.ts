// 1768. Merge Strings Alternately.ts
function mergeAlternately(word1: string, word2: string): string {
    let word = "";
    let i = 0;
    while (i < word1.length || i < word2.length) {
        if (word1[i]) word += word1[i];
        if (word2[i]) word += word2[i];
        i++;
    }
    return word;

};

// discussion
// https://leetcode.com/problems/merge-strings-alternately/discuss/1138455/JS-Easy-to-understand(No-fancy-methods-only-while-loop)
// js

// var mergeAlternately = function(word1, word2) {
    
//     let i=0,j=0,str='';
    
//     while(i<word1.length || j<word2.length){
    
//         if(i<word1.length){
//             str+=word1[i++]
//         }
    
//         if(j<word2.length){
//             str+=word2[j++]
//         }
//     }
    
//     return str;
// };