function rot13(str) {
  const original = [
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
  const twisted = [
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
  let arr = [...str];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === -1) {
      result.push(arr[i]);
    } else {
      let index = original.indexOf(arr[i]);
      result.push(twisted[index]); //arr[i] = index in firstHalf
    }
  }
  console.log(result.join(''));
}
rot13('SERR CVMMN!');

//need to add punctuation
//split letters to words
