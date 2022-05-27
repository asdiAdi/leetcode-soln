// 1337. weakestRowsInAMatrix.js
// Speed: faster than 22.50% 
// Memory: less than 73.95%
let kWeakestRows = function(mat, k) {
    let row = []
    let newRow = []
    for (let i = 0; i < mat.length; i++){
        newRow[i] = i;
        for (let j = 0; j < mat[i].length; j++){
            if (!row[i]) row[i] = 0;
            if (mat[i][j] === 0)break;
            row[i] += 1;
        }
    }
    for (let i = 0; i < row.length; i++){
        for (let j = 0; j < row.length - i; j++){
            if(row[j]>row[j+1]){
                let temp = row[j];
                row[j] = row[j+1];
                row[j+1] = temp;
                temp = newRow[j];
                newRow[j] = newRow[j+1];
                newRow[j+1] = temp;
            }
        }
    }
    return newRow.slice(0,k);
};



// Discussion
// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/discuss/846393/Two-JS-Solutions

// var kWeakestRows = function(mat, k) {
//     return mat
//         .map((row, idx) => [idx, row.reduce((acc,cur) => acc+cur)])
//         .sort((a,b) => a[1] - b[1])
//         .slice(0, k)
//         .map(pair => pair[0]);
//     // Time Complexity: O(m*n)
//     // Space Complexity: O(m)
// }

let x = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]];
console.log(kWeakestRows(x,3))