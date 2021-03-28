function rot13(str) {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const twistedAlphabet = [
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
  ];
  let regex = /([A-Z])/;
  let arr = [...str];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i]) === false) {
      //check if characters match A-Z, if not - push, to keep punctuation
      result.push(arr[i]);
    } else {
      let index = alphabet.indexOf(arr[i]); //find index placement of the original alphabet
      result.push(twistedAlphabet[index]); //replace with the same index of the twisted version
    }
  }
  return result.join('');
}
rot13('SERR CVMMN!');
