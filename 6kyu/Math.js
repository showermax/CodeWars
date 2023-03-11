// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3 n3, the cube above will have volume of (n−1)3 (n-1)^3 (n−1)3 and so on until the top which will have a volume of 13 1^3 13.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
function findNb(m) {
    let k = 0;
    let n = 0;
    do {
        n++;
        k += Math.pow(n, 3);
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
function digPow(n, p) {
    let arr = [];
    let sum = 0;
    let narr = n;
    while (narr > 0) {
        arr.unshift(Math.round(narr % 10));
        narr = narr / 10 - narr % 10 / 10;
    }
    sum = arr.reduce((s, e, i) => s + e ** (p + i), 0);
    return ((sum % n) === 0) ? sum / n : -1;
}
//console.log(digPow(46288, 3));

function Xbonacci(signature, n) {
    let sum = 0;
    let l = signature.length;
    for (let i = l; i < n; i++) {
        sum = 0;
        for (let j = (i - l); j < i; j++) {
            sum += signature[j];
        }
        signature.push(sum);
    }
    return signature.slice(0, n);
}
//console.log(Xbonacci([0,0,0,0,1],10));

function persistence(num) {
    let arr = [];
    let i = 0;
    if (num < 10) return 0;
    loop1:
    while (num > 9) {
        while (num > 0) {
            arr.unshift(Math.round(num % 10));
            num = num / 10 - num % 10 / 10;
        }
        i++;
        if (arr.reduce((p, e) => p * e) < 10) {
            return i;
        } else {
            num = arr.reduce((p, e) => p * e);
            arr = [];
            continue loop1;
        }
    }
}
//console.log(persistence(4));

function findUniq(arr) {

    let x = arr.find(e => e == 0);
    return x;

    let s = 0;
    let i = 0;
    while (s == 0) {
        s = arr[i + 1] - arr[i];
        i++;
    }
    if (i < arr.length - 1) {
        return (arr[i + 1] == arr[i - 1]) ? arr[i] : arr[i - 1];
    }
    else return arr[i];
}
//console.log(findUniq([0, 0, 1]));

function queueTime(customers, n) {
    let min = customers[0];
    let max = customers[0];
    let i=0;
    let k=0;
    if (customers.length === 0) return 0
    if (n === 1) return customers.reduce((a, b) => a + b)
    while ((n + i) < customers.length) {
        for (let j = 0; j < n; j++) {
            if (customers[j] < min) {
                min = customers[j];
                k = j;
            }
        }
        customers[k] = customers[k] + customers[n + i]
        i++;
        min = customers[0];
        k=0;
        console.log(customers)
    }
    for (let i = 0; i < n; i++) {
        if (customers[i]>max) max = customers[i];
    }
    return max
}
console.log(queueTime([5,3,4],    1));


