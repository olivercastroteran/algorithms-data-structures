/*
__________ Problem Solving Patterns __________

1. Devise a plan for solving a problem
2. Master common problem solving patterns
  2.1. Frequency counter
  2.2. Multiple pointers
  2.3. Sliding window
  2.4. Divide and conquer
  2.5. Dynamic programming
  2.6. Greedy algorithms
  2.7. Backtracking
  ...
*/

// 2.1. Frecuency counter

// Uses objects or sets to collect values/frecuency of values (can avoid the need for nested loops O(n))
const sameA = (arr1, arr2) => {
  // check valid inputs
  if (arr1.length !== arr2.length) return false;
  // create arr3 that stores true or false for every position
  let arr3 = [];
  // loop arr1 and check if arr2 contains the square of the arr1 value
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] * arr1[i] === arr2[i]) {
      arr3[i] = true;
    } else {
      arr3[i] = false;
    }
  }
  // return if conditions is true or false
  return arr3;
};

// O(n^2)
const sameB = (arr1, arr2) => {
  // check valid inputs
  if (arr1.length !== arr2.length) return false;
  // loop arr1 and check if arr2 contains the square of the arr1 value
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

const sameC = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let frecuencyCounter1 = {};
  let frecuencyCounter2 = {};

  for (let val of arr1) {
    frecuencyCounter1[val] = (frecuencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frecuencyCounter2[val] = (frecuencyCounter2[val] || 0) + 1;
  }

  for (let key in frecuencyCounter1) {
    if (!(key ** 2 in frecuencyCounter2)) {
      return false;
    }
    if (frecuencyCounter2[key ** 2] !== frecuencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

// console.log(sameA([1, 2, 3], [1, 4, 10]));
// console.log(sameB([1, 2, 3], [1, 4, 9]));
// console.log(sameB([1, 2, 3, 5, 4], [25, 1, 16, 4, 9]));

// Anagrams O(n)
const anagram = (str1, str2) => {
  // chack valid inputs
  if (str1.length !== str2.length) return false;
  // count character frecuency in both arrays
  let str1CharactersFreq = {};
  let str2CharactersFreq = {};

  for (let i in str1) {
    str1CharactersFreq[str1[i]] = (str1CharactersFreq[str1[i]] || 0) + 1;
  }

  for (let i in str2) {
    str2CharactersFreq[str2[i]] = (str2CharactersFreq[str2[i]] || 0) + 1;
  }

  console.log(str1CharactersFreq);
  console.log(str2CharactersFreq);

  for (let key in str1CharactersFreq) {
    if (!(key in str2CharactersFreq)) {
      return false;
    }
    if (str2CharactersFreq[key] !== str1CharactersFreq[key]) {
      return false;
    }
  }

  return true;
};

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//validAnagram('anagrams', 'nagaramm');

// console.log(anagram('anagram', 'angrama'));
// console.log(anagram('aaz', 'zza'));
// console.log(anagram('texttwisttime', 'timetwisttext'));

// O(n^2)
const sumZeroA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

//console.log(sumZeroA([-3, -1, 0, 1, 2, 3, 6]));

/*
_____________ Multiple Pointers Pattern _____________

use multiple pointers to m
*/

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// ________________ Count Unique valuse ________________
//console.log(sumZero([-5, -3, -1, 0, 3, 4, 6]));
function countUniqueVal(arr) {
  let i = 0;
  let j = 1;
  let count = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      count++;
      i++;
      j++;
    } else {
      i++;
      j++;
    }
  }

  return count;
}

function countUniqueVal2(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

// console.log(countUniqueVal([1, 1, 1, 3, 3, 5, 5, 7, 10, 10, 15])); // 6
// console.log(countUniqueVal([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueVal2([-2, -1, -1, 0, 1])); // 4

// ______________ Sliding Window ______________
function maxSubArraySumA(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

function maxSubArraySumB(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// console.log(maxSubArraySumA([1, 2, 5, 1, 6, 8, 9, 1, 3, 5], 3));
// console.log(maxSubArraySumB([1, 2, 5, 1, 6, 8, 9, 1, 3, 5], 3));

// _________ Divide and Conquer _________
// Binary search O(log(n)) time complexity
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1, 3, 5, 7, 11, 15, 27, 33, 35, 40, 101], 35));
