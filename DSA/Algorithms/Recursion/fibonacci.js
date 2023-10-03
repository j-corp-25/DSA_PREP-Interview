// Given a number N return the index value of the fibonacci sequence , where the sequence is:


const fibonacciRecursive = (n) => {
  if (n < 2){
    return n
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
console.log(fibonacciRecursive(8))
