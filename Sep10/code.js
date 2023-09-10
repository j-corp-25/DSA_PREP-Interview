
const arr1 =  ['a','b','c','x']
const arr2 = ['z','b','l']
// const containCommonItem = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// console.log(containCommonItem(arr1, arr2))

// this is not a good speed
//!when there nested loops you can use hash tables
// TODO we can implemtent this using obj in js

// array1 ==> obj{
//  a: true,
//  b: true,
//  c: true,
//  d: true,
//}

const containsCommonItems2 = (arr1,arr2) => {
    //loop through first array and create object where properties ===items in the array
    let map = {};
    for (let i=0;i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true
        }
    }
    // console.log(map)
    //loop through second array and check if the item in second array exists on created object
    for (let j=0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}
console.log(containsCommonItems2(arr1,arr2))
