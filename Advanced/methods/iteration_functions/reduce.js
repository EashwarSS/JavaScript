let numbers = [1, 2, 3, 4];

let sum = numbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(sum); // 10

// Used for reducing arrays to a single value
// Returns a single value