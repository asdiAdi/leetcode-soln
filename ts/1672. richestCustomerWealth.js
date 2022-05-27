// 1672. richestCustomerWealth.js
// Speed: faster than 77.05% 
// Memory: less than 29.73%
var maximumWealth = function(accounts) {
    return accounts.map(i => i.reduce((total, j) => total+=j))
        .sort((a,b) =>  b-a)[0]
};

// Discussion
// https://leetcode.com/problems/richest-customer-wealth/discuss/977722/TypescriptJavascript-One-Liner-Faster-Beats-100
// Typescript

// const maximumWealth = (accounts: number[][]): number => Math.max(...accounts.map(holder => holder.reduce((a, b) => a + b)));