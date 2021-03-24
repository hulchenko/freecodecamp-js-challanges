//Sum all nums in range:
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumAll([1, 4]));

//Diff two arrays:
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2) //concat into 1 array
    .filter((i) => !arr1.includes(i) || !arr2.includes(i)); //check concatenated array for similarities between 2 arrays
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
