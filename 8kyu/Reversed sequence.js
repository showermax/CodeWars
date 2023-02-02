// Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.
function reverseSeq(n) {
    var array = [] ;
    for ( var i = n ; i >= 1 ; i-- ){
      array.push(i);
    }
    return array;
  }