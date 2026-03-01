function Fibonacci(n) {
    const fib = [0,1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
        // fib[2] = fib[1] + fib[0] = 1 + 0 = 1
        // all of these are positions and the values in the positions will be added
    }
    return fib;
}

console.log(Fibonacci(2)) // 0,1 
console.log(Fibonacci(3)) // 0,1,1 
console.log(Fibonacci(7)) // 0,1,1,2,3,5,8

