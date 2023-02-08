function descendingOrder(n){
  let arr = array.from(n);
  return arr;
}


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
