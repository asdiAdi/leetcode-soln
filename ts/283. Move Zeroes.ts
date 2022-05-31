// 283. Move Zeroes
function moveZeroes(nums: number[]): void {
    let count = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            nums.splice(i, 1);
            i--;
            count.push(0);
        }
    }
    nums.push(...count);
};
// Discussion
// https://leetcode.com/problems/move-zeroes/discuss/530024/Easy-O(N)-JS-Solution

// js
// var moveZeroes = function(nums) {
//     let idxForNonZero = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             [nums[idxForNonZero], nums[i]] = [nums[i], nums[idxForNonZero]];
//             idxForNonZero++;
//             // no need to check the swapped number because we are scanning through the array from the left so it is guaranteed that 
//             // the element at the idxForNonZero is zero (not non-zero).
//         }
//     }
//     return nums;  
//     // Time Complexity: O(n)
//     // Space Complexity: O(1)
// };

// // we want to have two partitions. The first partition has only non-zeros and the second partition has only zeroes.
// // If we push all non-zeroes to the first partition, zeroes will be automatically moved to the second partition.
// // So, we keep an index where the next non-zero will go into and this index starts from zero. Every time we encounter a non-zero, 
// // we swap this element with the number at the index for the next non-zero.