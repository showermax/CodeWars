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