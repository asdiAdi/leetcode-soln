// 1232. Check If It Is a Straight Line
function checkStraightLine(coordinates: number[][]): boolean {
    let slope: number;
    let ans = true;
    coordinates.reduce((prev, cur) => {
        let newSlope = (cur[1] - prev[1]) / (cur[0] - prev[0]);
        newSlope = newSlope === -Infinity?Infinity:newSlope;
        if (slope && slope !== newSlope) ans = false;
        slope = newSlope;
        return cur;
    })
    return ans;
};

console.log(checkStraightLine([[0,0],[0,1],[0,-1]]));

// discussion
// https://leetcode.com/problems/check-if-it-is-a-straight-line/discuss/435812/JS-solution-with-explanation-100-faster-space-96.48-faster-time.
// js

// var getSlope = (co1, co2) => {
//     let x1 = co1[0];
//     let y1 = co1[1];
//     let x2 = co2[0];
//     let y2 = co2[1];
//     return ((y2-y1) / (x2-x1));
// }
// var checkStraightLine = function(coordinates) {
// 	// we start looping from the 2nd point, as we will compare the ith point with the 1st one.
//    // we loop till the 2nd last, as we compare the i+1 indexed with 1st point, if we go till the last one, then i + 1 will be NaN as i will be undefined;
//    for(let i = 1; i < coordinates.length - 1; i++) {
//         if(getSlope(coordinates[0], coordinates[i]) !== getSlope(coordinates[0], coordinates[i+1])) return false;
//     }
//     return true;
// };