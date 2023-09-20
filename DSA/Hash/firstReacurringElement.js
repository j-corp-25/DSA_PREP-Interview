const firstReacurring = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] ===array[j]) {
                return array[i];
            }
        }
    }
    return undefined;
}
console.log(firstReacurring([2,1,2,2,3,1,1,22,2,2]))

//this is the naive approach which uses 2 for loops which is very slow in terms of time complexity

