// 1. Same frequency
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) return false;

  let freqCoun1 = {};
  let freqCoun2 = {};

  for (let val of strNum1) {
    freqCoun1[val] = (freqCoun1[val] || 0) + 1;
  }

  for (let val of strNum2) {
    freqCoun2[val] = (freqCoun2[val] || 0) + 1;
  }

  for (let key in freqCoun1) {
    if (freqCoun1[key] !== freqCoun2[key]) return false;
  }

  return true;
}

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

// 2. Are there dublicates ?
function areThereDuplicates(...args) {
  let number = [];
  let char = [];

  args.forEach((a) => {
    if (typeof a == 'number') number.push(a);
    else char.push(a);
  });

  args = number.sort((a, b) => a - b).concat(char.sort());

  console.log(args);

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }

  return false;
}

function areThereDuplicatesLinear() {
  return new Set(arguments).size !== arguments.length;
}

// console.log(areThereDuplicates(1, 2, 3, 'a', 'b', 5));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates('a', 'b', 'c', 'a'));

// 3. Average pair
function averagePair(arr, targetAvrg) {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] / 2 === targetAvrg) {
      return true;
    } else if (arr[left] + arr[right] / 2 > targetAvrg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

function isSubsequence(str1, str2) {
  if (!str1) return true;

  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
  }

  return false;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abrthyncodfg')); //true
// console.log(isSubsequence('abc', 'acb')); // false order matters

function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let j = n; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - n];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

//console.log(minSubArrayLen([2, 3, 1, 2, 3, 4], 7)); // 2 -> [3,4]
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }

  return longest;
}

console.log(findLongestSubstring('rithmschool')); // 7
