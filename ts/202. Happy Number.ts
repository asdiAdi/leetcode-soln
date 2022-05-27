// 202. Happy Number.ts
function isHappy(n: number): boolean {
    let set = new Set();
    while (!set.has(n)){
        set.add(n)
        let sum = 0
        for(let i = 1; i <= String(n).length; i++){
            sum += Math.pow((n%(Math.pow(10,i)) - n%(Math.pow(10,i-1))) / Math.pow(10,i-1), 2)
        }
        if(sum === 1) return true;
        n = sum;
    }
    return false;
};

console.log(isHappy(2));

// discussion
// https://leetcode.com/problems/happy-number/discuss/508964/JS-short-hash-set-no-string
// js

// const isHappy = n => {
//     const seen = new Set();
//     let m;
//     while (n !== 1) {
//         if (seen.has(n)) return false;
//         seen.add(n);
//         [m, n] = [n, 0];
//         while (m > 0) {
//             n += (m % 10) ** 2;
//             m = (m - m % 10) / 10;
//         }
//     }
//     return true;
// }