module.exports = function getZerosCount(number, base) {
  let n, res, currNum = 2;
  let cntPow = {}; 

  // Recursive function return object with primary multipliers
  let getPrimaryNumbers = (n, primaryNumbers = {}) => {
    // Object for storing primary multipliers base
    // key - multipliers 
    // value - powers
		if (n % currNum === 0) {
      if(!primaryNumbers[currNum]) {
        primaryNumbers[currNum] = 0;
      }
      primaryNumbers[currNum]++;
		  n = n / currNum;
      getPrimaryNumbers(n, primaryNumbers);
	  } else if (n % currNum !== 0) {
		    if (n > currNum) {
          currNum++;
          getPrimaryNumbers(n, primaryNumbers);
		    } else {
          return primaryNumbers;
        }
    }
    return primaryNumbers;
  }

  // Get collection of primary numbers 
  let primaryNumbers = getPrimaryNumbers(base, {});

  // Loop for orimary numbers
  for (i in primaryNumbers){
    cntPow[i] = 0;
    n = 1;
    // Calculate sum of powers primary number 
    while (number / Math.pow(i, n) > 1) {
      cntPow[i] += Math.floor(number / Math.pow(i, n));
      n++;
    }
    // Get min in ratio sum powers and power of current primary number
    res ? res = Math.min(res,  Math.floor(cntPow[i]/primaryNumbers[i])) : res =  Math.floor(cntPow[i]/primaryNumbers[i]);
  }
  return res;
}