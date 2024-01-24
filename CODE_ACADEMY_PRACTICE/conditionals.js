//Eightball program :

let userName = '';

/*isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!'); 
*/
userName = "John"; // You need to define userName with an actual name or value
console.log(`Hello ${userName}!`);

let userQuestion = 'How many years do I have left to live?';
console.log(userQuestion);

//let eightBall = '';

/*if (randomNumber === 1) {
  console.log('It is certain');
}
else if (randomNumber === 2) {
  console.log('It is decidedly so');
}
else if (randomNumber === 3) {
  console.log('Reply hazy, try again');
}
else if (randomNumber === 4) {
  console.log('Cannot predict now');
}
else if (randomNumber === 5) {
  console.log('Do not count on it');
}
else if (randomNumber === 6) {
  console.log('My sources say no');
}
else if (randomNumber === 7) {
  console.log('Outlook not so good');
}
else {
  console.log('Signs point to yes');
}
*/

// make this program as a switch program, using break and default .
let randomNumber = Math.floor(Math.random() * 8);
var eightBall = (randomNumber === 1) ? console.log('It is certain'):
                (randomNumber === 2) ? console.log('It is decidedly so'):
                (randomNumber === 3) ? console.log('Reply hazy, try again'):
                (randomNumber === 4) ? console.log('Cannot predict now'):
                (randomNumber === 5) ? console.log('Do not count on it'):
                (randomNumber === 6) ? console.log('My sources say no'):
                (randomNumber === 7) ? console.log('Outlook not so good'):
                console.log('Signs point to yes');

console.log(randomNumber)

// even or odd
let even = 111
  even % 2 === 0 ? console.log('even') : console.log('odd');


let even2 = 7

if(even2 % 2 === 0) {
  console.log('is even')
} else {
  console.log('is odd')
}

// largest number 

var a = 10;
var b = 13;
var c = 15;

if (a > b && a > c) {
  console.log('a is the largest number');
} else if (b > a && b > c){
  console.log('b is the largest number');
} else if (c > a && c > b) {
  console.log('c is the largest number');
} else {
  console.log('Who knows what is the largest number');
}

/* THe Short Hand
var largestNumber = (a > b && a > c) ? 'a is the largest number' :
                   (b > a && b > c) ? 'b is the largest number' :
                   (c > a && c > b) ? 'c is the largest number' :
                   'Who knows what is the largest number';

console.log(largestNumber); */


let grade = 64;
/*
if(grade >= 90) {
  console.log('you have A');
} else if (grade <= 89 && grade >= 80) {
  console.log('you have B');
} else if ( grade <= 79 && grade >= 70) {
  console.log('you have C');
} else if ( grade <= 69 && grade >= 60) {
  console.log('you have D')
} else {
  console.log('you have F');
}
*/

var theGradeUget = (grade >= 90) ? console.log('you have A'):
                    (grade >= 80) ? console.log('you have B'):
                    (grade >= 70) ? console.log('you have C'):
                    (grade >= 60) ? console.log('you have D'):
                    console.log('you have F');



// Leap Year

let leapyear = Math.floor(Math.random() * 365)
console.log(leapyear)
/*
The first condition for a leap year is that it should be divisible by 4. 
Use the modulo operator (%) to check if the year is divisible by 4. */
if (leapyear % 4 === 0) {
  console.log('it is a leap yead')
} else {
  console.log('this year is not divisible not a leap year')
}


var shortLeap = (leapyear % 4 === 0)? console.log('it is a leap yead'):
console.log('this year is not divisible not a leap year');



let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true; 
let runnerAge = Math.floor(Math.random() * 60);

let yourRaceNumber;

if (runnerAge >= 18) {
  yourRaceNumber = `Your race number is: ${raceNumber}`;
} else {
  yourRaceNumber = `Your race number is: ${raceNumber + 1000}`;
}
console.log(yourRaceNumber);

if (runnerAge >= 18 || registerEarly === true) {
  console.log(runnerAge + ' early register')
  console.log(`YOUR RACE NUMBER IS ${yourRaceNumber}`)
  console.log(`YOUR RACE STARTS AT 9:30AM`)
} else if (runnerAge >= 18 || registerEarly !== true) {
  console.log(runnerAge)
  console.log(`YOUR RACE NUMBER IS ${yourRaceNumber}`)
  console.log(`YOUR RACE STARTS AT 11:00AM`)
} else if (runnerAge < 18 || registerEarly === true) {
  console.log(runnerAge + ' early register')
  console.log(`YOUR RACE NUMBER IS ${yourRaceNumber}`)
  console.log(`YOUR RACE STARTS AT 12:30AM`)
} else if  (runnerAge === 18){
  console.log(runnerAge)
  console.log(`YOUR RACE NUMBER IS ${yourRaceNumber}`)
  console.log(`YOUR RACE STARTS AT 12:30AM`)
}



// When there is an empty variable, this is a way to fill it 

let weather = "spring";
let clothingChoice = "";

if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice);


/* Write a program that takes the temperature as input and logs 
"Wear a coat" if the temperature is below 50 degrees Fahrenheit,
 and "Enjoy the weather" otherwise. */


/*let tempChecker
let temp = Math.floor(Math.random() * 100)

tempChecker = (temp < 50) ? console.log("Enjoy the weather"): console.log("its to hot"); */


/*let temp = Math.floor(Math.random() * 100)

if (temp > 50){
  console.log("Enjoy the weather")
} else {
  console.log("its to hot")
}
*/

console.log('IN CASE FORM')
let temp = Math.floor(Math.random() * 100)
switch (temp){
  case (temp > 50):
    console.log("Enjoy the weather")
    break;
 default:
  console.log("its to hot");
}

/*Ask the user to input two numbers. 
Compare the numbers and log whether the first number is greater, 
smaller, or equal to the second number. */

 let _number1 = Math.floor(Math.random() * 100);
 let _number2 = Math.floor(Math.random() * 100);
 let num1_and_2 = console.log(`${_number1}  ${_number2}`);

let _number1_N_2 = (_number1 >= _number2)? console.log('the first Number is bigger'): console.log('_number2 is bigger');

if(_number1 > _number2) {
  console.log('the first Number is bigger');
} else {
  console.log('_number2 is bigger')
}

switch(_number1, _number2) {
  case (_number1 > _number2):
  console.log('the first Number is bigger');
  break
  default:
    console.log('_number2 is bigger');
}

// Take a number as input and log whether it's positive, negative, or zero.

let _negative_number = Math.floor(Math.random() * 100)- 45;

if (_negative_number) {
  _negative_number < 0
  console.log(`${_negative_number} IS A NEGATIVE NUMBER`);
} else {
  console.log('Is a positive number');
}

let for_negative_N = (_negative_number < 0)? console.log(`${_negative_number} IS A NEGATIVE NUMBER`):
console.log(`Is a positive number ${_negative_number}`)

switch (for_negative_N){
  case (_negative_number < 0):
    console.log(`${_negative_number} IS A NEGATIVE NUMBER`)
    break
  default:
    console.log(`Is a positive number ${_negative_number}`)
}


