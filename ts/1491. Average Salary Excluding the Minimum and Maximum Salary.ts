// 1491. Average Salary Excluding the Minimum and Maximum Salary.ts
// Speed: faster than 34.25% 
// Memory: less than 63.39%
function average(salary: number[]): string {
    salary = salary.sort( (a,b) =>  a - b).slice(1, -1)
    return (salary.reduce((total, num) => total+num)/salary.length).toFixed(5)
};

console.log(average([8000,9000,2000,3000,6000,1000]));
// average([8000,9000,2000,3000,6000,1000]);

// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/discuss/1823363/JS-and-TS-simple-O(N)-solution
// Javascript
// function average(salary: number[]): number {
//     let idxOfMin = 0, idxOfMax = 0;
//     let sum = 0;
    
//     for (let i = 0; i < salary.length; i++) {
//         sum += salary[i];
        
//         if (salary[i] < salary[idxOfMin]) idxOfMin = i;
//         if (salary[i] > salary[idxOfMax]) idxOfMax = i;
//     }
    
//     sum -= salary[idxOfMin] + salary[idxOfMax];
    
//     return sum / (salary.length - 2);
// };