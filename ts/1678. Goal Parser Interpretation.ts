// 1678. Goal Parser Interpretation.ts
function interpret(command: string): string {
    let ans = "";
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') ans += 'G';
        else if (command.slice(i, i + 2) === '()') {
            ans += 'o';
            i++;

        } else {
            ans += 'al';
            i += 3;
        }

    }
    return ans;
};

// discussion
// https://leetcode.com/problems/goal-parser-interpretation/discuss/1452656/JavaScript-JS
// js

// var interpret = function (command) {
//     return command.split("()").join("o").split("(al)").join("al");
// };

