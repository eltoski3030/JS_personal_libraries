// myModules.js

// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      console.error("Cannot divide by zero.");
      return undefined;
    }
  }
  
  // Exporting the functions as modules
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
  };
  