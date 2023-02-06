doTest('I', 1);
doTest('IV', 4);
doTest('MMVIII', 2008);
doTest('MDCLXVI', 1666);
function solution (roman) {
    let s =0;
    let arr = roman.split('');;
    for (let i=0; i < arr.length; i++) {
      if (arr[i]== 'M') s+=1000;
      if (arr[i]== 'D') s+=500;
      if (arr[i]== 'C') { 
        s+=100;
        for (let j = i+1; j < arr.length; j++){
                        if (arr[j]== 'D') s+=300;
                        if (arr[j]== 'C') s+=100;
                        if (arr[j]== 'L') s+=50;
                        if (arr[j]== 'X') s+=10;
                        if (arr[j]== 'V') s+=5;
                        if (arr[j]== 'I') s+=1;
                       }
        }
    
    
    } 
      return s;
  }
  console.log(solution ("MCDV"));