//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
    let arr1 = str.split(" ");
    let arr2 = [];
      for (let i = 0; i < arr1.length; i++) {
        arr2 = arr1[i].split("").reverse().join("");
        arr1[i] = arr2;
      }
      return arr1.join(' ');
    }
    console.log(reverseWords("hello baby"));