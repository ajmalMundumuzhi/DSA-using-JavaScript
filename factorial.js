function Factorial(n) {
    let flag = 1;
    for (let i = 2; i <= n; i++) {
        flag = flag * i;
    }
    return flag;
}

console.log(Factorial(0)) // 1
console.log(Factorial(1)) // 1
console.log(Factorial(5)) // 120