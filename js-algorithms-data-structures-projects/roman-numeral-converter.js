function convertToRoman(num) {
  const romanNums = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let output = '';
  for (let i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
      output = output + romanNums[i];
      num = num - decimals[i];
    }
  }
  return output;
}

convertToRoman(36);
