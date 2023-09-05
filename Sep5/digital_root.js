// Write a method, digital_root(num). It should sum the digits of a positive integer. If it is greater than or equal to 10, sum the digits of the resulting number. Keep repeating until there is only one digit in the result, called the "digital root". Do not use string conversion within your method.

const digital_root = (num) => {
    if(num < 10) {
        return num
    }
    while (num >= 10 )  {
        let sum = 0
        while (num > 0){
            let rooot = (num % 10)
            sum += rooot
            num = Math.floor(num / 10)
        }
        num = sum
    }
    return num
}

console.log(digital_root(123));
