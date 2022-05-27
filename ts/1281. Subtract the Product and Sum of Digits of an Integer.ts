// 1281. Subtract the Product and Sum of Digits of an Integer.ts
function subtractProductAndSum(n: number): number {
    let sum = 0, product = 1;
    n.toString().split("")
    .map(str => {
        sum+=Number(str);
        product *= Number(str);
    })
    return product - sum;
};
console.log(subtractProductAndSum(234))