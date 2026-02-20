function calculator(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;

console.log(calculator(5, 3, add));
