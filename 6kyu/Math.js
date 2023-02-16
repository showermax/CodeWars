function findNb(m) {
    let k = 0;
    let n = 1;
do {
    k += Math.pow(n - 1, 3);
    n++;
} while (k < m);
return (k == m) ? (n - 2) : -1;
}

console.log(findNb(135440716410000));