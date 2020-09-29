var now = require('performance-now');

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = now();
addUpTo(1000000000);
let t2 = now();

let t3 = now();
addUpTo2(1000000000);
let t4 = now();

console.log(`Time: ${t2 - t1} miliseconds`);
console.log(`Time: ${t4 - t3} miliseconds`);
