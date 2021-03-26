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

//Drop it
function dropElements(arr, func) {
  while (!func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});

//Flatten nested array:
function steamrollArray(arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let subArr = steamrollArray(arr[i]);
      myArr = myArr.concat(subArr);
    } else {
      myArr.push(arr[i]);
    }
  }
  return myArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

//Translate from Binary to English:
function binaryAgent(str) {
  return str
    .split(' ')
    .map((i) => String.fromCharCode(parseInt(i, 2))) //2 is english.
    .join('');
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);

//Everything Be True:
function truthCheck(collection, pre) {
  return collection.every((i) => i[pre]);
}

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ],
  'sex'
);

//Add arguments together:

function addTogether() {
  const [num1, num2] = Object(arguments); //defines inputted values Object.values(arguments) would work too.
  if (typeof num1 !== 'number') {
    return undefined; //checking first if number, if not no need to proceed - return undefined.
  }
  const second = (num2) => (typeof num2 === 'number' ? num1 + num2 : undefined); //second is a function, takes num2 as argument.
  if (num2 !== undefined) {
    return second(num2);
  } else {
    return second;
  }
}
addTogether(5)(7);

//Make a Person:
var Person = function (firstAndLast) {
  this.getFirstName = function () {
    return firstAndLast.split(' ')[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(' ')[1];
  };
  this.getFullName = function () {
    return firstAndLast;
  };
  this.setFirstName = function (input) {
    firstAndLast = input + ' ' + firstAndLast.split(' ')[1];
  };
  this.setLastName = function (input) {
    firstAndLast = firstAndLast.split(' ')[0] + ' ' + input;
  };
  this.setFullName = function (input) {
    firstAndLast = input;
  };
};

var bob = new Person('Bob Ross');
bob.getFirstName();

//Mat the Debris:
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop through each item in the array arr
  arr.map((i) => {
    // Calculate the Orbital period
    //Add orbitalPeriod property
    i.orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + i.avgAlt, 3) / GM)
    );
    //Delete the avgAlt property
    delete i.avgAlt;
  });
  return arr;
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
