// Selection Sort

const numbers = [99, 44, 6, 1, 4, 6, 10, 15, 28, 84, 0];

const SelectionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array
};

console.log(SelectionSort(numbers))
