// 191. Number of 1 Bits
function hammingWeight(n: number): any {
    let total = 0;
    n.toString(2).split("").map(str => total+=Number(str))
    return total;
};

console.log(hammingWeight(0b1011));

// https://leetcode.com/problems/number-of-1-bits/discuss/468836/PythonJSGoC%2B%2B-O(-lg-n-)-by-bit-manipulation
// js
// var hammingWeight = function(n) {
    
//     let num_of_1s = 0;
//     for( let i=0 ; i < 32; i++ ){  
//         num_of_1s += n & 1;
//         n >>= 1;
//     }
//     return num_of_1s
// };