// Big O
/*
  ---------- Time complexity ----------
  Count number of operations in the algorithm - function
  operations - asignments - aditions, etc
  ---------- Space complexity ----------
  coun space that variables take in memory
  primitives = constant; references and strings = n
*/

var now = require('performance-now');

function addUpTo(n) {
  let total = 0; // 1 asignment
  for (let i = 0; i <= n; i++) {
    // 1 asigment + n comparisons + n aditions + n asignments
    total += i; // n aditions + n asignments
  }
  return total;
} // 2 + 5n -> O(2 + 5n) -> O(5n) -> O(n)

function addUpTo2(n) {
  return (n * (n + 1)) / 2; // 3 operations
} // 3 -> O(3) -> O(1)

let t1 = now();
addUpTo(1000000000);
let t2 = now();

let t3 = now();
addUpTo2(1000000000);
let t4 = now();

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

console.log(`Time: ${t2 - t1} miliseconds`);
console.log(`Time: ${t4 - t3} miliseconds`);
console.log(subtotals([1, 2, 3, 5, 9]));
