// 1790. Check if One String Swap Can Make Strings Equal.ts
function areAlmostEqual(s1: string, s2: string): boolean {
    let strSwapNum = 0;
    for (let i = 0; i<s1.length; i++){
        if (s1[i] !== s2[i]) strSwapNum++;
    }
    console.log(strSwapNum);
    console.log(s1.split("").sort().join() === s2.split("").sort().join());
    return (strSwapNum === 2 || strSwapNum === 0) && (s1.split("").sort().join() === s2.split("").sort().join())? true:false;
};


console.log(areAlmostEqual("abcdee" , "abcdgf"));

// discussion
// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/discuss/1190882/JS-clean-solution-68ms
// js

// var areAlmostEqual = function(s1, s2) {
//     if(s1 === s2) return true;
//     let res="";
    
//     for(let i=0;i<s1.length;i++)
//         if(s1[i] !== s2[i]) res += s1[i]+s2[i];        
    
//     return res.length === 4 && res[0]===res[3] && res[1] === res[2];
// };

