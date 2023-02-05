function findShort(s){
    let arr = s.split(" ");
    let min = arr[0].length
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < min) {
        min = arr[i].length;
      }
    }
    return min;
  }

  // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
  function solution(str, ending){
    let arr = str.split();
    for (let i = 0; i < ending.length; i--) {
      if (str[str.length - 1 - i] === ending[ending.length - 1 - i]) {
        return true;
      } else {return false};
    }
  }