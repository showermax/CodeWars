// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// Fundamentals
// Strings

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }

function removeExclamationMarks(s) {
    let snew = [] ;
    let d = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== "!") {
          d += s[i];
      }  
    }
    return d;
  }
  //Disemvowel Trolls
//   Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/[aeiou]]/gi, '');
console.log(str);
}


// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    return (n < 0 || m < 0) ? 0 : m * n;
  }

//   You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//   #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string. 

function getMiddle(s) {
    if (s.length % 2 == 0) {
      return s[s.length / 2 -1] + s[s.length / 2];
    }
    return s[(s.length - 1) / 2];
  }


  function sumMix(x){
  let sum = 0;
for(let i=0;  i<x.length; i++){
  if (typeof(x[i]) == "string"){
    x[i] = parseInt(x[i]);
    sum += x[i];
  } else {
  sum += x[i];}
}
  return sum
}
function squareSum(numbers){
let res = 0;
  for (let i=0; i<numbers.length; i++){
  res += numbers[i]**2;
}
  return res;
}

function minMax(arr){
  let max = arr[0];
  let min = max;
  for (let i=0; i<arr.length; i++){
   if (arr[i]>max){
     max = arr[i];
   } else if (arr[i]<min){
     min = arr[i];
   }
}
  return [min,max]
}

function friend(friends){
  let myf = [];
  for (let i=0; i<friends.length; i++){
    if (friends[i].length == 4) myf.push(friends[i])
}
  return myf;
  }
  function invert(array) {
    for (let i = 0; i < array.length; i++) {
      array[i]=-array[i];
    };
   return array;
 }

 //Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
 function smash (words) {
  "use strict";
  return words.join(' ');
};
 // without join
 function smash (words) {
  let str=""
  if (words.length == 0) {return str};
  str = words[0];
  for (i=1; i<words.length;i++) {
     str += " " + words[i];
  } 
  return str;
};


//What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
function addLength(str) {
  let arr = str.split(" ");
    for (let i= 0; i < arr[i].length; i++ ) {
      arr[i] = arr[i] + " " + arr.length;
    }
    return arr;
  }
// just a loke
  function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}

// Sum Numbers
function sum (numbers) {
  let s = 0;
  if (numbers != []) {
    for (let i = 0; i < numbers.length; i++) {
       s += numbers[i];
    } return s;
  }
};

function positiveSum(arr) {
  return arr.filter(i => i >0).reduce((s,i) => s+i)
}
console.log(positiveSum([1,2,3,4,-6,6]));