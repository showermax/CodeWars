// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.


function solution (roman) {
  let arr = roman.split('');
  for (let i=0; i < arr.length; i++) {
  switch (arr[i]){
      case "I" : arr[i]=1;
      break;
      case "V" : arr[i]=5;
      break;
      case "X" : arr[i]=10;
      break;
      case "L" : arr[i]=50;
      break;
      case "C" : arr[i]=100;
      break;
      case "D" : arr[i]=500;
      break;
      case "M" : arr[i]=1000;
      break;
      }
  }
  let s = arr[arr.length-1];
  for (let i=0; i < arr.length-1; i++) {
    if (arr[i] < arr[i+1]) s+=-arr[i]; else s+=arr[i];
      }
	return s;
}
console.log(solution ("MMDDXV"));
