// create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(7, 8, 9, 10, 11, 12);
const fruit = ["apple", "orange", "bananan", "pear"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if its an array
val = Array.isArray(numbers);
// Get single value
val = numbers[2];
val = numbers[0];
// insert into array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(100);

// MUTATING ARRAYS
// Add on to end
// val = numbers.push(250);
// // Add to front
// val = numbers.unshift(25);
// // remove from end
// val = numbers.pop();
// // remove from front
// val = numbers.shift();
// // Splice values
// // numbers.splice(1,4);
// // Reverse
// numbers.reverse();
// // Concatenate array
// val = numbers.concat(numbers2);

// Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // Use the compare funciton
// val = numbers.sort(function(a, b) {
//   return a - b;
// });

// // Reverse sort
// val = numbers.sort(function(a, b) {
//   return b - a;
// });

// Find
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
