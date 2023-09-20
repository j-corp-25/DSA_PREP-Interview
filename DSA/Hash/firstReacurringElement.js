const firstReacurring = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] === array[j]) {
                return array[i];
            }
        }
    }
    return undefined;
}
console.log(firstReacurring([2,1,2,2,3,1,1,22,2,2]))

//this is the naive approach which uses 2 for loops which is very slow in terms of time complexity

// here we are going to use a hash table
// this uses O(n)
const firstReacurring2 = (array) => {
    let map = {}
    for (let i = 0; i < array.length; i++){
        if(map[array[i]] !== undefined){
            return array[i]
        }else {
            map[array[i]] = i
        }
    }
    return undefined

}

console.log(firstReacurring([2,5,1,2,3,5,1,2,4]))
