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
  //Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

  function isTriangle(a,b,c)
{
  if (a + b > c && a + c > b && b + c > a){
    return true;
  }
   return false;
}
function basicOp(operation, value1, value2)
{
  switch (operation) {
      case "+":
      return value1 + value2;
      break;
      case "-":
      return value1 - value2;
      break;
      case "*":
      return value1 * value2;
      break;
      case "/":
      return value1 / value2;
      break;
  }
}

function squareDigits(num){
 let str=num.toString().split('').map(el=>el*el).join('');
return parseInt(str,10);
}
function Dig(num){
arr = num.toString().split('');
let element='';
Obj = {
  0 : 'zero',
  1 : 'one',
  2 : 'two',
  3 : 'three',
  4 : 'four',
  5 : 'five',
  6 : 'six',
  7 : 'seven',
  8 : 'eight',
  9 : 'nine'
}
element = Obj[arr[0]];
 for (let i = 1; i < arr.length; i++) {
   element = element + Obj[arr[i]];
 }
return element;
}
console.log(Dig(116))