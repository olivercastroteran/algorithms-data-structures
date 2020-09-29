/* 
_______ Big O Objects _______
insertion: O(1)
removal: O(1)
searching: O(n)
access: O(1)
*/
let instructur = {
  firstName: 'Oli',
  isInstructor: true,
  favNums: [1, 7, 10, 69],
};

// O(n)
console.log(Object.keys(instructur));

// O(n)
console.log(Object.values(instructur));

// O(n)
console.log(Object.entries(instructur));

// O(1)
console.log(instructur.hasOwnProperty('firstName'));

/* 
_______ Big O Arrays _______
ordered list
insertion: it depends [add to the end O(1), add to the beginning O(n)]
removal: it depends [remove from the end O(1), remove from the beginning O(n)]
searching: O(n)
access: O(1)

push() pop() [fine]
shift() unshift() [slower]
*/

// Array methods big O
/*
push() -> O(1)
pop() -> O(1)
shit() -> O(n)
unshit() -> O(n)
concat() -> O(n)
slice() -> O(n)
splice() -> O(n)
sort() -> O(n*log n)
forEach() - map() - filter() - reduce() -> O(n)
*/
