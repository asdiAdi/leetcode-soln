// 412. fizzBuzz.js
// Speed: faster than 41.21% 
// Memory: less than 78.84%
let fizzBuzz = function(n) {
    // check if divisible by 3 5 or 15, return Fizz, Buzz or Fizzbuzz respectively
    let ans = []
    for (let i = 1; i<=n; i++){
        let isDiv3 = false;
        let isDiv5 = false;
        if (i%3 == 0){
            isDiv3 = true;
        }
        if (i%5 == 0){
            isDiv5 = true;
        }
        if(!isDiv3 && !isDiv5) ans.push(i.toString());
        else if(isDiv3 && !isDiv5) ans.push("Fizz");
        else if(!isDiv3 &&isDiv5) ans.push("Buzz");
        else ans.push("FizzBuzz");
    }
    return ans;
};

// Discussion
// https://leetcode.com/problems/fizz-buzz/discuss/872418/JavaScript-3-approaches%3A-naive-hashMap-and-modern-JS-one-line

// using hash map: code is flexible now, we can add more conditions 
//to the hash map without adding multiple if...else conditions

// let fizzBuzz = (n) => {

//     let hashMap = new Map();
//     let arr = [];

//     hashMap.set(3, "Fizz");
//     hashMap.set(5, "Buzz");

//     for (let i = 1; i <= n; i++) {
//         let output = "";
//         for (let key of hashMap.keys()) {
//             if (i % key == 0) {
//                 //The Map object holds key-value pairs and remembers the original insertion order of the keys.
//                 //So 5 will be always checked after 3
//                 output += hashMap.get(key);
//             }
//         }
//         if (output == "") {
//             output = i.toString();
//         }
//         arr.push(output);
//     }
//     return arr;
// };