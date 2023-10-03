// Write two functions that find the factorial of any number. One should use recursive, the other should just use a for loop


const findFactorialRecursive = (n) => {
    if(n === 1) {
        return 1
    }
   return findFactorialRecursive(n - 1) * n
}
console.log(findFactorialRecursive(10))

const findFactorialIterative = (n) => {
    let answer = 1;
    for (let i = 2; i <= n;i++) {
        answer = answer * i
    }
    return answer
}

console.log(findFactorialIterative(5))
