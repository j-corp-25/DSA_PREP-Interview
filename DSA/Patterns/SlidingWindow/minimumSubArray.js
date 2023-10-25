//Given an array of positive numbers and a positive number ‘S,ʼ
//find the length of the smallest
//contiguous subarray whose sum is greater than or equal to ‘Sʼ.
// Return 0 if no such subarray exists.

const findSmallestSubArr = (arr, s) => {
  let windowSum = 0;
  let minLength = Infinity;
  let len = arr.length;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < len; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
};

console.log(findSmallestSubArr([2, 1, 5, 2, 3, 2], 7));
console.log(findSmallestSubArr([2, 1, 5, 2, 8], 7));
console.log(findSmallestSubArr([3, 4, 1, 1, 6], 8));
