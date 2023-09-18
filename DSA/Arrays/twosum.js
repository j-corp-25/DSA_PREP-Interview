

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target)
          return [i, j]
      }
    }
  };

console.log(twoSum([2,7,11,15],9))

const twoSum2 = function (nums, target) {
    const map = {}
    for (let i = 0; i < nums.length - 1; i++){
        const diff = target - nums[i]

        if (diff in map) return [i, map[diff]]

        map[nums[i]] = i
    }
}

console.log(twoSum2([2,7,11,15],9))
