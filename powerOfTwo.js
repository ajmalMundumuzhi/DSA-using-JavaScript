function isPowerOfTwo(n) {
    const flag = 2;
    for( let i = 2; i <=n; i++) {
        i = flag * 2
        if (i !== n) {
            return false;
        }
    }
    return true;
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(3)) // false
console.log(isPowerOfTwo(4)) // true
console.log(isPowerOfTwo(64)) // true