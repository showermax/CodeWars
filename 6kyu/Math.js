// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3 n3, the cube above will have volume of (n−1)3 (n-1)^3 (n−1)3 and so on until the top which will have a volume of 13 1^3 13.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
function findNb(m) {
    let k = 0;
    let n = 0;
do {
    n++;
    k += Math.pow(n,3);
} while (k < m);
return (k == m) ? n : -1;
}

//console.log(findNb(100));

//Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

//     we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

// In other words:

//     Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.
function digPow(n, p){
   let arr = [];
   let sum = 0;
   let narr = n;
    while ( narr > 0) {
       arr.unshift(Math.round(narr % 10));
        narr = narr/10 - narr%10/10;       
    }
    sum = arr.reduce((s,e,i) => s + e**(p+i),0);
    return  ((sum % n) === 0) ? sum/n : -1;
}
  //console.log(digPow(46288, 3));

  function tribonacci(signature,n){
    if (n == 0) return [];
    if (n <=3 ) return signature.slice(0,n);
    for (let i = 3; i < n; i++) {
        signature.push(signature[i-3] + signature[i-2] + signature[i-1]);
        
    }
    return signature;
  }
  console.log(tribonacci([1,1,1],10));