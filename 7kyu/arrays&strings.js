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

