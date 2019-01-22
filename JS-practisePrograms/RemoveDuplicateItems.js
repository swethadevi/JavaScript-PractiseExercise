// Q5 Write a JavaScript program to remove duplicate items from an array?

//using sets to remove duplicates from array
const names = ['swetha', 'iva', 'soni', 'lucky', 'swetha'];
let unique = [...new Set(names)];
console.log(unique); //'swetha', 'iva', 'soni', 'lucky'
