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