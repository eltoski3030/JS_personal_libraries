//Write a function that takes two numbers as parameters and returns their sum.

function sum2(num1,num2) {
    return num1 + num2
}

let result1 = sum2(4,5)

console.log(result1)


//Create a function that takes an integer as an argument and returns 
//"Even" if it's an even number and "Odd" if it's an odd number.

function evenOdd(oddnumber){
    if (oddnumber % 4 === 0) {
    return `${oddnumber} it's pair`;
    } else {
        return `${oddnumber} it's odd`; }
    }

console.log(evenOdd(Math.floor(Math.random()* 10)))


let evenODD = (num1) => {
    if (num1 % 4 === 0) {
        return `${num1} it's pair`;
        } else {
            return `${num1} it's odd`; }
}
console.log(evenODD(Math.floor(Math.random()* 10)));


// Calculate the biggest number
function maxNumber(a,b,c) {
    if (a > b && a > c){
        return 'a is the biggest number'
    } else if (b > a && b > c){
        return 'b is the biggest number'
    } else if (c > a && c > b) {
        return 'c is the biggest number'
    }
}

console.log(maxNumber((Math.floor(Math.random()* 10)),(Math.floor(Math.random()* 10)),(Math.floor(Math.random()* 10))))

//Write a function that takes a string as input and returns the reversed string.
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

let results = reverseString("hello");



//PIEDRA PAPEL Y TIJERA 
console.log('PAPER ROCK SCISSORS');

const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput.toLowerCase();
  } else {
    console.log('Error');
    return null; // Added a return statement for consistency
  }
}

const getComputerChoice = () => {
  const rand = Math.floor(Math.random() * 3);

  switch (rand) {
    case 0:
      return 'rock';

    case 1:
      return 'paper';

    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'Rock breaks scissors';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'Paper wraps rock';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Scissors cut paper';
    } else {
        return 'There has been an error';
    }
}

function playGame(userChoice = getUserChoice(), computerChoice = getComputerChoice()) {
  if (userChoice !== null) {
    console.log(determineWinner(userChoice, computerChoice));
  }
}

playGame('rock');
// Example usage:


/* 1) Addition Function:

Write a function add that takes two parameters and returns their sum. */

// Refactorated: let sumOf2 = (onevar, twovar) => console.log(onevar + twovar);

function sumof2(one1,tw2) {
    console.log(one1 + tw2)
}
sumof2(13, 30)
// 2)Multiplication Function:
// let multi = (mult1,multi2) => console.log(mult1 * multi2);

function multi(multi1,multi2){
    return console.log(multi1 * multi2);
}

multi(20,30)

// Greeting Function:

/* 3) function greetings(name){
    return console.log(`hi how are you doing ${name}`)
}
greetings('pablo')
*/ 
let greetings = (name) => console.log(`hi how are you doing ${name}`);

greetings('carlos')




/* 4) Write a function power that takes two parameters,
 base and exponent, 
 and returns the result of raising the base to the given exponent.*/

 /* function power(base,exponent){
    return console.log(base ** exponent)
 }
*/

let power = (base,exponent) => console.log(base ** exponent)

power(10,10)

/* Average Function:

Write a function average that takes an 
array of numbers and returns their average. */



 
function generateOddNumberTriangle(rows) {
    let triangle = '';

    for (let i = 0; i < rows; i++) {
        // Add leading spaces to align the triangle
        for (let j = 0; j < rows - i - 1; j++) {
            triangle += '   ';
        }

        // Add odd numbers to the triangle
        let currentNumber = 2 * i + 1;
        for (let j = 0; j <= i; j++) {
            triangle += currentNumber.toString().padStart(3, ' ') + ' ';
            currentNumber += 2;
        }

        triangle += '\n';
    }

    return triangle;
}

function sumNthRow(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += 2 * (n - 1) + 1 + 2 * i;
    }
    return sum;
}

// Generate and display the triangle with nine rows
console.log(generateOddNumberTriangle(9));

// Calculate and display the sum of the ninth row
console.log("Sum of the ninth row:", sumNthRow(9));




