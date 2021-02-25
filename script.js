///////////////////////////////////////#1 Convert Celsius to FahrenheitPassed
function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }
  
  convertToF(30);

///////////////////////////////////////#2 Reverse a StringPassed
function reverseString(str) {
    str = str.split("").reverse("").join("");
    return str;
  }
  
  reverseString("hello");
/////////////////////////////////////// #3 Factorialize a Number
function factorialize(num) {
  for (var result = 1; num > 0; num--) {
    result *= num;
  }
  return result;
}

factorialize(5);

///////////////////////////////////////#4 Find the Longest Word in a String
function findLongestWordLength(str) {
  var arr = str.split(" ");//split sentence to an array
   var longestWord = arr[0];//assume longest word is the first word of an array
   for (var i=0; i< arr.length; i++){ //iterate through array of words
     
     if(arr[i].length > longestWord.length){
       //compare other words of an array if they are longer than the first one
       longestWord = arr[i];
     }
   }
   return longestWord.length;//return length of the longest word
   
 }
 findLongestWordLength("The quick brown fox jumped over the lazy dog");
///////////////////////////////////////#5 Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(Math.max(...arr[i]));{
    }
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
///////////////////////////////////////#6 Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  let num = target.length;
  let result = str.substring(str.length - num, str.length);
  if (result == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
///////////////////////////////////////#7 Repeat a String
function repeatStringNumTimes(str, num) {
  let string = "";
  while (num > 0){
    string += str;
    num--;
  }
  return string;
}

repeatStringNumTimes("abc", 3);
///////////////////////////////////////#8 Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
  let string = "";
 if (str.slice(0, num) == str) {
   return str;
 } else {
   let short = str.slice(0,num) + "...";
   return short;
 }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
///////////////////////////////////////#9
///////////////////////////////////////#10
///////////////////////////////////////#11
///////////////////////////////////////#12
///////////////////////////////////////#13
///////////////////////////////////////#14
///////////////////////////////////////#15
///////////////////////////////////////#16

