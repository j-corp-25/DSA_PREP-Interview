const boxes1 = [1,2,3,4,5]

const findPairs = () => {
    for (i = 0; i < boxes.length; i++ ) {
        console.log(i)
        for (i = 1; i < boxes.length; i++){
            console.log(i + 1)
        }

    }
}

findPairs(boxes);

const boxes = ['a','b','c','d','e'];

const logallPairs = (array) => {
    for (i = 0; i < array.length; i++){
        for (let j = 0;j < array.length; j++ )
        console.log(array[i], array[j])
    }
}

logallPairs(boxes)
// this algo would n^2

