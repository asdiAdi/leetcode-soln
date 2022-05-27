// 1822. Sign of the Product of an Array.ts
function arraySign(nums: number[]): number {
    let num = nums.reduce((total, cur) => total*=cur);
    if (num>0) return 1;
    else if (num<0) return -1;
    else return 0;
};

// function signFunc(num: number): number{
//     if (num>0) return 1;
//     else if (num<0) return -1;
//     else return 0;
// }

console.log(arraySign([-1,-2,-3,-4,3,2,1]));

// discussion
// https://leetcode.com/problems/sign-of-the-product-of-an-array/discuss/1266142/Simpler-and-faster-(99.08)-JS-solution
// js

// var arraySign = function(nums) {
//     if(nums.includes(0))return 0
//     if(nums.filter(v=>v<0).length%2==1)return -1
//     return 1
// };
