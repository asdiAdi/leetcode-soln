// 566. Reshape the Matrix.ts
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    if (mat.length * mat[0].length !== r * c) return mat;

    let temp: number[] = [];
    mat.forEach(val => temp = [...temp, ...val]);
    mat = [];

    for (let i = 0; i < r; i++) {
        mat.push(temp.slice(i * c, i * c + c));
    }
    return mat;

};

// discussion
// https://leetcode.com/problems/reshape-the-matrix/discuss/1488653/JavaScript-JS-3-liner-90-faster-solution
// js

// var matrixReshape = function(mat, r, c) {
//     const flat = mat.flat()
//     if (flat.length !== r*c) return mat;
//     return [...Array(r)].map(() => flat.splice(0,c)) 
// };