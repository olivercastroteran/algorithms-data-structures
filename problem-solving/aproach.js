/*
______________ UNDERSTAND THE PROBLEM ______________

1. Can i restate the problem in my own words
2. What are the inputs that go into the problem
3. What are the outputs that should come from the solution
4. Can the outputs be determine from the inputs ?
5. How should i label the important pieces of data that are a part of the problem ?

______________ PROBLEM SOLVING ______________

1. Understand the problem
2. Explore concrete examples
3. Break it down (steps -> solve)
4. Solve-Simplify
5. Refactor ~
*/

const sum = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};

//console.log(sum(5, 10.4));

/*
______________ EXPLORE EXAMPLES ______________

- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs
*/

// 'Aabadffa' -> {a: 4, b: 1, d: 1, f: 2}
const charCount = (str) => {
  // make Obj to return at end
  const counts = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // If char is number/letter and is key in Obj, add 1 to count
    if (
      (typeof char === 'string' || typeof char === 'number') &&
      counts[char]
    ) {
      counts[char]++;
      // else if char is number/letter and is NOT in Obj add it and set value to 1
    } else if (typeof char === 'string' || typeof char === 'number') {
      counts[char] = 1;
    } else {
      // else if char is something else dont do anything
      return;
    }
  }
  // return Obj at end
  return counts;
};

// Refacture
function charCountR(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

function charCountR2(str) {
  let obj = {};
  for (let l of str) {
    let char = l.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] ? obj[char]++ : (obj[char] = 1);
    }
  }
  return obj;
}

// other solutions -> regular expresion to charCode ???

console.log(charCount('Aabadffa 52 *-b7'));
console.log(charCountR('Aabadffa 52 *-b7'));
console.log(charCountR2('Aabadffa 52 *-b7'));
