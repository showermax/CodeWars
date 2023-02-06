function solution (roman) {
    let s =0;
    let arr = roman.split('');;
    for (let i=0; i < arr.length; i++) {
      if (arr[i]== 'M') s+=1000;
      if (arr[i]== 'D') s+=500;
      if (arr[i]== 'C') { 
        s+=100;
                        if (arr[i+1]== 'D') s+=300; i++;
                        if (arr[i+1]== 'C') s+=100; i++;
                        if (arr[i+1]== 'L') s+=50; i++;
                        if (arr[i+1]== 'X') s+=10; i++;
                        if (arr[i+1]== 'V') s+=5; i++;
                        if (arr[i+1]== 'I') s+=1; i++;
                       }
      if (arr[i]== 'X')
        }
    
    
  
      return s;
  }
  console.log(solution ("MCDV"));
  