// 13. romanToInteger.js
// Speed: faster than 92.63% 
// Memory: less than 99.47%
const numeralList = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
let romanToInt = function(s) {
    let pastNumeral = 9999;
    let value = 0;
    // checks from left to right
    for (let numeral of s){
        if (numeralList[numeral] > pastNumeral)value -= pastNumeral*2;
        value += numeralList[numeral];
        pastNumeral = numeralList[numeral];
    }
    return value;
};
// OUTPUT
// console.log(romanToInt("CMMLXIV"));

// Discussion Solution
// https://leetcode.com/problems/roman-to-integer/discuss/1074149/JS-Python-Java-C%2B%2B-or-Switch-Dictionary-Solution-w-Explanation-or-beats-100

// const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
// var romanToInt = function(S) {
//     let ans = 0
//     // checks from right to left
//     for (let i = S.length-1; ~i; i--) {
//         let num = roman[S[i]]
//         if (4 * num < ans) ans -= num
//         else ans += num
//     }
//     return ans
// };