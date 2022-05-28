// 496. Next Greater Element I.ts
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let ans: number[] = [];
    nums1.forEach((num) => {
        for (let j = nums2.indexOf(num); j <= nums2.length; j++){
            if (j<0 || j === nums2.length){
                ans.push(-1);
                break;
            }
            if (nums2[j] > num) {
                ans.push(nums2[j])
                break;
            }
        }
        // return idx;
    })

    // for (let i = 0; i < nums1.length; i++){
    //     for (let j = nums2.indexOf(nums1[i]); j <= nums2.length; j++){
    //         if (j<0 || j === nums2.length){
    //             ans.push(-1);
    //             break;
    //         }
    //         if (nums2[j] > nums1[i]) {
    //             ans.push(nums2[j])
    //             break;
    //         }
    //     }
    // }
    return ans;
};

console.log(nextGreaterElement( [2,4], [1,2,3,4]));

// discussion
// js
// https://leetcode.com/problems/next-greater-element-i/discuss/1255899/JS-O(n)-and-O(n2)-solutions

// TC = O(m + n); SC = O(n)
// var nextGreaterElement = function(nums1, nums2) {

// 	// using map to store the closest greater element on the right for each `num`
//     const map = new Map();
	
// 	// using stack to keep track of the decreasing subsequence (3, 2, 1, 4)
// 	// when num > stack.top(), we pop all the elements and set the closest greater element on the right for them as `num`
//     const stack = [];
    
//     // O(n)
//     nums2.forEach(num => {
//         while(stack.length && stack[stack.length - 1] < num) {  // if stack is not empty, then compare the top element with num
//             map.set(stack.pop(), num);                          // if num is greater than the top element, add it to the map, and set the next greater element for the top element as `num`
//         }
//         stack.push(num);                                        // add num to stack to find it's next greater element
//     })
    
//     // O(m) ~ O(n)
// 	// if map has the num, we got the closest greater element on the right for that num
// 	// else we did not and set -1 for that num
//     return nums1.map(num => map.has(num) ? map.get(num) : -1);
// }
