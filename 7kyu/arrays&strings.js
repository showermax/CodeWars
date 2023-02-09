function descendingOrder(n){
  let arr = array.from(n);
  return arr;
}


//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

function sumOfMinimums(arr) {
  let sum = 0;
  let i=0;
  while ( i < arr.length) {
    let min=arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < min) min=arr[i][j];
    }
    sum +=min;
    i++;
  }
  return sum;
}
  console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

//   Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let i=0;
for (let j = 0; j < str.length; j++) {
      switch (str[j]) {
          case "a" : i++;
          break;
          case "e" : i++;
          break;
          case "i" : i++;
          break;
          case "o" : i++;
          break;
          case "u" : i++;
          break;
      }
    }
  return i;
}

//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function DNAStrand(dna){
 let arr = dna.split('');
 for (let i = 0; i < arr.length; i++) {
  switch (arr[i]) {
    case 'A': arr[i]= 'T';
    break;
    case 'T': arr[i]= 'A';
    break;
    case 'C': arr[i]= 'G';
    break;
    case 'G': arr[i]= 'C';
    break;
  }
 }
 return arr.join('');
 }
 console.log(DNAStrand("TATCG"))


//  Task

//  Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
 
//  Don't change the order of the elements that are left.

 function removeSmallest(numbers) {
  // let min = Math.min(...numbers);
  // let index = numbers.indexOf(min);
  let newarr = [...numbers];
  newarr.splice(numbers.indexOf(Math.min(...numbers)),1);
  return newarr;
}
console.log(removeSmallest([5, 3, 2, 1, 4]));
//console.log(min, index);


