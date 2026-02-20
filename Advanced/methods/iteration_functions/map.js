let numbers = [1, 2, 3];

let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
console.log(numbers); // original unchanged

// Used for transforming arrays
// Returns a new array