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
  return oddarray;
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));