// Given an array find the average of all contiguous
//subarrays of size `K in it

const findAvgOfSubArr = (arr, k) => {
    const results = []
    let len = arr.length
    let windowSum = 0
    let windowStart = 0

    for(let windowEnd = 0; windowEnd < len; windowEnd ++) {
        windowSum += arr[windowEnd]

        if (windowEnd >= k - 1) {
            results.push(windowSum/k)

            windowSum -= arr[windowStart]

            windowStart++
        }
    }
    return results

}
console.log(findAvgOfSubArr ([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
