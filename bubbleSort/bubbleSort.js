const array = [23, 21, 48, 17, 8, 14, 9, 12, 9, 46, 38, 27];
let swapping = true

const swap = (index) => {
  ind1 = array[index];
  ind2 = array[index + 1];
  array[index] = ind2;
  array[index + 1] = ind1;
  return array;
}

while (swapping) {
  swapping = false
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      swap(index);
      swapping = true;
    }
  }
}


console.log(`Mine:     ${array}`);
