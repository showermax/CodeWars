// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
function summation(num) {
    let sum = num;
    for (let i = 0; i < num; i++) {
      sum += i;
    }
   return sum;
 }