const myModules = require('./modules.js');
const myModulesExport = require('./exported_modules.js')

// Module names to call: add, subtract, multiply, divide

// Use functions from myModules
const newAdding = myModules.add;
const newSubtracting = myModules.subtract;
const newMultiply = myModules.multiply;
const newDivide = myModules.divide;
const give_random_numbers = myModulesExport.give_numbers;
const NumberAssigner = myModulesExport.NumberAssigner;
import * as cowsay from "cowsay"

//const greeting = cowsay.think({ text: 'hi pablo!' });

const add2nums = newAdding(2, 40);
console.log(add2nums);
const some_numbers = give_random_numbers(10)//put the amount of numbers to be generated 
console.log('Generated Numbers:', some_numbers)

let new_person = new NumberAssigner('pablo',10)
console.log(new_person)
//console.log(greeting)