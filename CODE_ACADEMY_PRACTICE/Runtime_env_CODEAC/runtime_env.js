function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}

const celsiusInput = process.argv[2]; // Get the 3rd input from the argument list
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);



// shape-area.js
const PI = Math.PI;

// Function to calculate the area of a circle
const circleArea = (radiusLength) => {
  return PI * radiusLength * radiusLength;
};

// Function to calculate the area of a square
const squareArea = (sideLength) => {
  return sideLength * sideLength;
};

// Export the functions
module.exports = {
  circleArea,
  squareArea
};


console.log(circleArea(3))
