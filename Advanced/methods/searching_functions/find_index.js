let numbers = [10, 20, 30, 40];

let index = numbers.findIndex(function(num) {
  return num > 20;
});

console.log(index); // 2