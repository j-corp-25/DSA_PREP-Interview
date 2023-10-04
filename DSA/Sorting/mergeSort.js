const numbers = [99, 44, 6, 1, 4, 6, 10, 15, 28, 84, 0];

const mergeSort = (array) => {
    if(array.length === 1) {
        return array
    }

    //split array in into right and left

    const length = array.length;
    const middle = Math.floor(length/2)
    const left = array.slice(0,middle)
    const right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
const merge = (left,right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
console.log(mergeSort(numbers))
