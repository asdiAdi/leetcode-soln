// 1502. Can Make Arithmetic Progression From Sequence.ts
function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a,b)=>a-b)
    let diff = arr[1] - arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] - arr[i-1] !== diff) return false;
    }
    return true;
};

console.log(canMakeArithmeticProgression([2,4,6,8]));

// discussion
// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/discuss/1832357/JS-and-TS-O(n)-solution-and-O(nlogn)-solution\
// O(n) soln

// function canMakeArithmeticProgression(arr: number[]): boolean {
//     const max = Math.max(...arr);
//     let current = Math.min(...arr);
//     const gap = (max - current) / (arr.length - 1);
//     const set: Set<number> = new Set(arr);
    
//     while (current < max) {
//         current += gap;
//         if (!set.has(current)) return false;
//     }
//     return true;
// };