// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

//     Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
   let cN = 0;
   let cW = 0;
    for (let i=0; i<walk.length;i++){
    if(walk[i] == 'n') cN++;
    else if (walk[i] == 's') cN--; else if (walk[i] == 'w') cW++; else cW--;
   }
   return cN == 0 && cW== 0 && walk.length == 10;
  }
  function isValidWalk2(walk) {
    let cN = 0
    let cW = 0
      
    for (let i=0; i<walk.length;i++) {
      switch (walk[i]) {
        case 'n': cN++; break
        case 's': cN--; break
        case 'w': cW++; break
        case 'e': cW--; break
      }
    }
    
    return cN == 0 && cW== 0 && walk.length == 10;
  }
console.log(isValidWalk2(['w','e','n','e','w','s','w','e','w','e']));

//   assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
//     assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
//     assert.isFalse(isValidWalk(['w']), 'should return false');
//     assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
function sortArray(array) {
  let oddarray=[];
  let indexarray=[];
  for (let i = 0; i < array.length; i++) {
    if (array[i]%2 != 0) {
      oddarray.push(array[i]);
      indexarray.push(i);
    }
  }
  oddarray.sort( (a, b) => a - b );
  for (let j = 0; j < oddarray.length; j++) {
    array.splice(indexarray[j], 1, oddarray[j]);
  }
  return array;
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));


function sum (numbers) {
  let s = 0;
  if (numbers != []) {
    for (let i = 0; i < numbers.length; i++) {
       s += numbers[i];
    } return s;
  }
};

function isPangram(string){
  let lowstring = string.toLowerCase();
  let regexp = /[a-z]/g;
  let arr = lowstring.match(regexp);
  let letters = arr.filter((element, indexOfelement) => arr.indexOf(element) == indexOfelement);
  return (letters.length == 26) ? true : false;
}
console.log(isPangram('The quick brown fo jumps over the lazy dog.'));

//Consecutive strings
//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
function longestConsec(strarr, k) {
     let newarray =  strarr.map((element, index,) => {
       for (let i = 1; i < k; i++) {
         element += strarr[index+i];
      } return element;
     }).slice(0,strarr.length - k + 1);
     let max = newarray[0].length ;
     let n = 0;
     for (let i = 1; i < newarray.length; i++) {
      if (newarray[i].length > max) { max = newarray[i].length; n = i;}
     }
     return newarray[n];
}
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));

var uniqueInOrder=function(iterable){
  newarray = [];
for (let i = 0; i < iterable.length; i++) {
  newarray.push(iterable[i]);
  while (iterable[i] === iterable[i+1]) {
    i++;
  }
}
return newarray;
}
console.log(uniqueInOrder([1,2,2,3,3]))