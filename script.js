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
/////////////////////////////////////// #3 Find the Longest Word in a String
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
///////////////////////////////////////#4
///////////////////////////////////////#5
///////////////////////////////////////#6
///////////////////////////////////////#7
///////////////////////////////////////#8
