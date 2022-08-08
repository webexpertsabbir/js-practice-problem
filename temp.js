let first = 5;
let second = 10;
console.log(first, second);

// appeoach: 1
/* const temp = first;
first = second;
second = temp;
console.log(first, second); */

// appeoach: 2

[first, second] = [second, first];
console.log(first, second);