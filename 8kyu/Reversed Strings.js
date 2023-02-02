// Complete the solution so that it reverses the string passed into it. 
function solution(str){
  let newstr = '';
  for ( var i = str.length - 1; i >= 0; i-- ) {
    newstr += str[i];
  }
  return newstr;
}
console.log(solution("string"));