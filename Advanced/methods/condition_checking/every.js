let numbers = [2, 4, 6];

let result = numbers.every(function(num) {
  return num % 2 === 0;
});

console.log(result); // true