let arr = [23, 21, 48, 17, 8, 14, 9, 12, 9, 46, 38, 27];
const sortedArr = [];
let swapping = true;



const swap = (index) => {
  sortedArr.push(index);
  const ind1 = arr[0];
  const ind2 = arr.indexOf(index);

  arr[0] = ind2;
  arr[ind2] = ind1;

  arr.shift();

  console.log(arr);
  return arr;
}

while (swapping) {
  swapping = false;
  let lowestValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowestValue) {
      lowestValue = arr[i];
    }
  }
  if (arr.length >= 1) {
    swap(lowestValue);
    swapping = true;
  }
}
console.log(`Final:    ${sortedArr}`);