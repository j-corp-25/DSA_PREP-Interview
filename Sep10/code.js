
const arr1 =  ['a','b','c','x']
const arr2 = ['z','b','l']
const containCommonItem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }

  return false;
};

console.log(containCommonItem(arr1, arr2))

// this is not a good speed
