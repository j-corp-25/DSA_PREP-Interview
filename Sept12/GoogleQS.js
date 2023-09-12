// naive approach using two for loops

const hasPairWithSum = (arr, sum) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
};

// Better


const hasPairWithSum2 = (arr, sum) => {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
};

console.log(hasPairWithSum2([1,2,4,4],8))
