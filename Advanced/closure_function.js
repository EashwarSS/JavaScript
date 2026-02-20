function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2

// A variable count is created.
// It belongs to the scope of outer.
// outer() returns the inner function.
// The inner function uses count (which is defined in outer).
// Even after outer() finishes execution,
// count does NOT get destroyed.