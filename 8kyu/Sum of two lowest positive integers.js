//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {
    let min1 = numbers[0];
    let min1N = 0;
    let min2 =1000;
   for (let i = 1; i < numbers.length; i++) {
     if (numbers[i] < min1) {
       min1 = numbers[i];
       min1N = i;
     }
    }
    if (min1N == 0) {
      min2 = numbers[1];
      for (let i = 1; i < numbers.length; i++) {
       if (numbers[i] < min2) {
       min2 = numbers[i];
         }
        } 
    }  else { min2 = numbers[0]; 
           for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < min2 && i !== min1N) {
            min2 = numbers[i];
             } 
            } 
        }
     return min1+min2;
  }