let numbers = [1, 3, 4];

let result = numbers.some(function(num) {
  return num % 2 === 0;
});

console.log(result); // true