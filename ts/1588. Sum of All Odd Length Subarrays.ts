// 1588. Sum of All Odd Length Subarrays.ts
function sumOddLengthSubarrays(arr: number[]): number {
    let total = 0;
    let oddLength = 1;
    for (let i = 0; i <= arr.length-oddLength+1 && arr.length>=oddLength; i++){
        arr.slice(i, i + oddLength).forEach(val => total+=val);
        if (i == arr.length-oddLength) {
            oddLength += 2
            i = -1;
        };
    }
    return total;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));

// Discussion
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/discuss/1223240/O(N)-JS-Solution-w-explanation
// js

// var sumOddLengthSubarrays = function(arr) {
//     let sum = 0, N = arr.length;
//     for (let i = 0; i < arr.length; i++) {
//         let total = i * (N-i) + (N-i);
//         sum += Math.ceil(total / 2) * arr[i];
//     }
//     return sum;
//     // T.C: O(N)
//     // S.C: O(1)
// };
