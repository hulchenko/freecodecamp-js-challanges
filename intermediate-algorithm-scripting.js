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

//Seek and destroy:
function destroyer(arr, ...add) {
  return arr.filter((i) => !add.includes(i));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Objects:
function whatIsInAName(collection, source) {
  let argKeys = Object.keys(source);
  return collection.filter((i) => {
    return argKeys
      .map((key) => i.hasOwnProperty(key) && i[key] === source[key])
      .reduce(function (a, b) {
        return a && b;
      });
  });
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);

//Pig Latin:
function translatePigLatin(str) {
  let consonants = /^[^aeiou]+/; //define consonants up until first vowel, [^] - is negated set.
  let myConsonants = str.match(consonants);
  return myConsonants == null //if consonants are absent, concat 'way'
    ? str.concat('way')
    : str
        .replace(consonants, '') //remove consonants in the beginning
        .concat(myConsonants) //add to the back
        .concat('ay'); //add extra line
}

console.log(translatePigLatin('glove'));
