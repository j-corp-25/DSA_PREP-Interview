// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.


const totalFruit = (fruits) => {
    let start = 0
    let end = 0
    let fruitFrequency = {}
    let maxLength = 0
    let len = fruits.length

    for(let end = 0; end < len; end++){
        const endFruit = fruits[end]

        if(!(endFruit in fruitFrequency)) {
            fruitFrequency[endFruit] = 0
        }
        fruitFrequency[endFruit]++

        while(Object.keys(fruitFrequency).length > 2){
            const startFruit = fruits[start]

            fruitFrequency[startFruit]--

            if(fruitFrequency[startFruit] === 0) {
                delete fruitFrequency[startFruit]
            }
            start++
        }

        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength

}

console.log(totalFruit([1,2,3,2,2]))
