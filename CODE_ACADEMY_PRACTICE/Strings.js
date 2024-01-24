// Excercise code for the first part of the lesson
function exercise1() {
    var a = "Hello";
    var b = "World";
    var c = a + " " + b;
    console.log(c);
}

 const firstName = 'pablo';
 const lastName = 'perez';

 console.log(firstName + ' ' + lastName)


var elLargo = 'cuan largo es este string';
console.log(elLargo.length);

/*//Substring:
//Given a string, extract a substring and print it. For example, given "Hello World," print only "Hello."
//  Restando un string Given string */
let originalString = "Hello World";

// Extracting a substring
let substring = originalString.substring(0, 5);

// Display the result
console.log("Original String:", originalString);
console.log("Substring:", substring);

let borrar_un_string = "Hola Mundo esta es la frase que voy a borrar";
console.log(borrar_un_string.slice(0,19));

/* String Comparison:
Create two strings and use a 
comparison operator to determine if they are equal. 
Print the result. */

let string1 = "hello";
let string2 = "hello";
console.log(string1 === string2);  


/*String Concatenation with Numbers:
Create a variable with a numeric value and concatenate it with a string. 
Print the result. */ 
console.log("Hola mundo " + 5);

/*String Concatenation with Variables:
Create a variable with a string value and concatenate it with another variable. 
Print the result. */ 
let variable1 = "Hola";
let variable2 = "Mundo";
console.log(variable1 + " " + variable2);

//string conversion to number:
let number = "5";
let number2 = "10";
console.log(number + number2);

let number3 = "5";
let number4 = "10";
console.log(Number(number3) + Number(number4));

/*let number5 = "5";
let number6 = "10";
console.log(parseInt(number5) + parseInt(number6));

let number7 = "5";
let number8 = "10";
console.log(parseFloat(number7) + parseFloat(number8));


let number9 = "5";
let number10 = "10";
console.log(Number(number9) + Number(number10));

let number11 = "5";
let number12 = "10";
console.log(parseInt(number11) + parseInt(number12));

let number13 = "5";
let number14 = "10";
console.log(parseFloat(number13) + parseFloat(number14));

*/

let hundred = "100"
let twoHundred = "200"

console.log(Number(hundred) + Number(twoHundred));


let allUpper = "this is ganna be all upper"
let allLower = "THIS IS GANNA BE ALL LOWER"
console.log(allUpper.toUpperCase());
console.log(allLower.toLowerCase());

var forTemplate = "Hello World";
console.log(`this is a template model ${forTemplate}`)

let string_1 = "Hello";
let string_2 = "World";
let string_3 = "part2";
console.log((string_1 + string_2 + string_3).length);



let var1_1 = 'these are numbers 5';
let var1_2 = 'and 6';

var var_1_1_1_2 = Number(var1_1) + Number(var1_2);

console.log(var_1_1_1_2);  // WIll give NaN "not a number"

//Cap the first letter of the first name and the first letter of the last name.
let fn = 'pablo';
let ln = 'lizardi';

console.log(`My name is ${fn[0].toUpperCase()+fn.slice(1)} ${ln[0].toUpperCase()+ln.slice(1)}`);

//variable Swapping:

//increment and decrement
let x = 5;
let y = x ++;
console.log(x);

let z = 5;
let a = z--;
console.log(z);

const circle = Math.PI;
console.log(circle);

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


const multistring = `this
is a 
multiline
string`;

console.log(multistring)