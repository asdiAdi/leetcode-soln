// 1523. Count Odd Numbers in an Interval Range.ts
// Speed: faster than 65.47% 
// Memory: less than 30.62%
function countOdds(low: number, high: number): number {
    return Math.floor((high-low)/2) + (low%2 === 1 || high%2 === 1?1:0);
}
console.log(countOdds(21,22));

// Discussion
// same code