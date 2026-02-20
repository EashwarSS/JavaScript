function processUser(name, callback) {
  callback(name);
}

processUser("Eashwar", function(name) {
  console.log("Welcome " + name);
});

// This function takes two parameters:
// name → normal value
// callback → a function