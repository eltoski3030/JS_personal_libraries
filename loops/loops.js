
//Print Numbers from
console.log('print 5 numbers')
let number_printer = () => {
for (let numbers = 0; numbers <= 5; numbers++){
 return console.log(numbers);
 }
}


const myArray = [6, 19, 20, 21];
const yourArray = [19, 81,21,2];

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

/////   comparing tow arrays using loops    /////
console.log('////     comparing tow arrays using loops (Nested Loop)   ////')

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log(mutualFollowers = bobsFollowers[i])
    }
  }
};

///             While loop               ///

console.log('///             While loop               ///')
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}



/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8  */

function generateOddNumberTriangle(rows) {
  let triangle = '';

  for (let i = 0; i < rows; i++) {
      // Add leading spaces to align the triangle
      for (let j = 0; j < rows - i - 1; j++) {
          triangle += '  ';
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




