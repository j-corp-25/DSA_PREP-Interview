
let calculations = 0;

const fibonacci = (n) => {
    calculations++
    if(n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let calculations2 = 0;
const fibonacciWithDP = () => {
    let cache = {}
    return fib = (n) => {
        calculations2++
        if (n in cache) {
            return cache[n];
        }else {
            if(n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n]
            }
        }
    }
}

const fibInstance = fibonacciWithDP();
console.log(fibInstance(50));
console.log(fibonacci(50))
console.log(calculations)
console.log(calculations2)
