// 1342. numberOfStepsToReduceANumberToZero.js
// Speed: faster than 57.14% 
// Memory: less than 41.74%
let numberOfSteps = function(num) {
    let count = 0;
    for(count; num>0; count++){
        if(num%2 == 0) num /= 2;
        else num -= 1;
    }
    return count;
};

for(let i = 0; i<100; i++){
    console.log(i+" "+numberOfSteps(i))
}


// Discussion
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/discuss/507736/C%2B%2B-O(1)-solution-without-iterationrecursion

// The answer depends on the number of ones and the length of a binary representation - you can get this in O(1) by counting leading zeros.
// C++
// return num ? __builtin_popcount(num) + 31 - __builtin_clz(num) : 0;