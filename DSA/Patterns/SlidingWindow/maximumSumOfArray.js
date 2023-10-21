//Given an array of positive numbers and a positive number
// 'k' find the maximum sum of any contigous subarray of size 'k'

const maxOfSubarray = (arr,k) => {
    let max = 0
    let len = arr.length
    let windowSum = 0
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < len; windowEnd ++){
        windowSum += arr[windowEnd]

        if(windowEnd >= k - 1){
            currMax = Math.max(windowSum,max)
            max = currMax
            windowSum -= arr[windowStart]
            windowStart++
        }
    }
    return max``

}

console.log(maxOfSubarray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
