// 1672. Richest Customer Wealth
function maximumWealtha(accounts: number[][]): number {
 
    let maxWealth: number[] = [];
    accounts.forEach(bank => maxWealth.push(bank.reduce((tot, cur) => tot+=cur)) );
 
    return Math.max(...maxWealth);
 
 
};

console.log(maximumWealtha([[1,2,3],[3,2,1]]));

// discussion
// https://leetcode.com/problems/richest-customer-wealth/discuss/1971053/JS-easy-and-fast-one-liner-solution-(faster-than-93.49)
// js

// var maximumWealth = function(accounts) {
//     return Math.max(...accounts.map(item => item.reduce((prev, curr) => prev+curr,0)))
// };