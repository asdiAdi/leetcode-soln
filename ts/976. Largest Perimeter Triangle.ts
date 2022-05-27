// 976. Largest Perimeter Triangle.ts
function largestPerimeter(nums: number[]): number {
    nums.sort((a,b) => a - b);
    for (let i = nums.length-3; i>= 0; i--){
        if(nums[i] + nums[i+1] > nums[i+2]) return nums[i]+nums[i+1]+nums[i+2];
    }
    return 0;
};

console.log(largestPerimeter([1,2,2,4,18,8]));

// Discussion
// js
// same code