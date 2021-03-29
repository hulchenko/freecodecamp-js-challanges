function telephoneCheck(str) {
  let testregex = /^(?:(?:\+?1\s*(?:[-]\s*)?)?(?:\(\s*([2-9][02-8][02-9])\s*\)|([2-9][02-8][02-9]))\s*(?:[-]\s*)?)?([2-9][02-9]{2})\s*(?:[-]\s*)?([0-9]{4})?$/gm;
  let result = testregex.test(str);
  if (str.length < 10) {
    return false;
  }
  return result;
}

telephoneCheck('555-555-5555');

/*
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555 
*/
