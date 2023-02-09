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


 
//What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
function addLength(str) {
  let arr = str.split(" ");
    for (let i= 0; i < arr.length; i++ ) {
      for (let j = 0; j < arr[i].length; j++) {
        arr[i] = arr[i] + " " + arr[i].length;
      } 
  }
    return arr[0];
  }
  console.log(addLength("lemon tree"));