function palindrome(str) {
  const regex = /([A-Z0-9])/gi;
  let check = str.match(regex).join('').toLowerCase();
  let regularWay = '';
  let oppositeWay = '';
  for (let i = 0; i <= check.length - 1; i++) {
    regularWay = regularWay.concat(check[i]);
  }
  for (let x = check.length - 1; x >= 0; x--) {
    oppositeWay = oppositeWay.concat(check[x]);
  }
  if (regularWay == oppositeWay) {
    return true;
  } else {
    return false;
  }
}
palindrome('A man, a plan, a canal. Panama');
