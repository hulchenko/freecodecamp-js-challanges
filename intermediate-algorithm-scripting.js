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

//Search and replace:
function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    //check on uppercase
    after = after.replace(after[0], after[0].toUpperCase()); //if true, bring replacement to uppercase
  } else {
    after = after.replace(after[0], after[0].toLowerCase()); //if false, bring replacement to lowercase
  }
  return str.replace(before, after);
}
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');

//DNA Pairing:
function pairElement(str) {
  return str.split('').map((i) => {
    if (i === 'G') {
      return ['G', 'C'];
    } else if (i === 'C') {
      return ['C', 'G'];
    } else if (i === 'A') {
      return ['A', 'T'];
    } else if (i === 'T') {
      return ['T', 'A'];
    }
  });
}

pairElement('GCG');

//Missing letters:
function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let strLen = str.length;
  let getIndex = alphabet.indexOf(str[0]);
  for (let i = getIndex; i < strLen + getIndex; i++) {
    if (!str.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
  return undefined;
}

fearNotLetter('abce');

//Sorted Union:
function uniteUnique(arr) {
  let args = Array.from(arguments); //pull arguments into array
  let myArr = [];
  for (let i = 0; i < args.length; i++) {
    //iterate through arguments first
    for (let x = 0; x < args[i].length; x++) {
      //iterate through each individual argument
      if (!myArr.includes(args[i][x])) {
        //goes through list of existing numbers and adds new(non-existing ones)
        myArr.push(args[i][x]);
      }
    }
  }
  return myArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  let symbols = /[&<>"']/g;
  function replace(symb) {
    switch (symb) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
    }
  }
  return str.replace(symbols, replace);
}

console.log(convertHTML('Dolce & Gabbana'));

//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let prevNum = 0;
  let currNum = 1;
  let result = 0;
  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      result += currNum;
    }
    currNum = prevNum + currNum;
    prevNum = currNum - prevNum;
  }
  return result;
}

sumFibs(4);
