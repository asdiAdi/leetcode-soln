// 1779. Find Nearest Point That Has the Same X or Y Coordinate.ts
function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let res = Infinity;
    let index = -1;
    for(let i = points.length-1; i >=0; i--){
        if (points[i][0] === x || points[i][1] === y){
            let dist = Math.abs(x-points[i][0])+Math.abs(y-points[i][1]);
            if(dist <= res) {
                res = dist
                index = i;
            };
        }
    }
    return index;
};

// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/discuss/1098080/javascript-100-100-simple
// js
// cleaner soln but same logic
// var nearestValidPoint = function(x, y, points) {
//     let min = Infinity
//     let idx = -1
//     points.forEach(([a,b], i)=>{
//         if(a===x || b===y){
//             const dist = Math.abs(x-a) + Math.abs(y-b)
//             if(dist<min){
//                 idx = i
//                 min = dist
//             }
//         }
//     })
//     return idx
// };