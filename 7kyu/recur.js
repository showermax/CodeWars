function getSum(a, b)
{
  let sum = a;
if (a == b) {
  return sum;}
  else {
    sum =  getSum(a + 1, b) + a;
    return sum;
  }
}
console.log(getSum(1,3));

// assert.strictEqual(getSum(0,-1), -1);
// assert.strictEqual(getSum(0, 1),  1);
// assert.strictEqual(getSum(2, 2),  2);