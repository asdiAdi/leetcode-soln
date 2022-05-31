// 1572. Matrix Diagonal Sum.ts
function diagonalSum(mat: number[][]): number {
    let sum = mat.length % 2 ? -mat[Math.trunc(mat.length / 2)][Math.trunc(mat.length / 2)] : 0;
    for (let i = 0; i < mat.length; i++) {

        sum += mat[i][i] + mat[i][mat.length - 1 - i];

    }
    return sum;
};

// discussion
// https://leetcode.com/problems/matrix-diagonal-sum/discuss/830407/Kt-Js-Py3-Cpp-solutions
// js

// let diagonalSum = (A, N = A.length, f = Math.floor) => _.sum(A.map((_, i) => A[i][i] + A[i][N - 1 - i])) - (N & 1 ? A[f(N / 2)][f(N / 2)] : 0);