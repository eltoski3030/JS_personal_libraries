for (let n = 0; n < 5; ++n){
console.log(n);
}

for (j = 10;j > 0; --j) {
    console.log(j)
    
}





// reverse string 

function reverseString(str) {
    // Use the split, reverse, and join methods to reverse the string
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  
  console.log(reversedString); // Output: "!dlroW ,olleH"


  //same function without using array methods

  let sometext =  'some text'
  let splittext = sometext.split('')
  let reversetext = splittext.reverse()
  let joinedtext = reversetext.join('')

  console.log(joinedtext)
// factorial 

  // keep this function call here 
 let factorilize = (num) => {
    let result = 1;
    for(i=1;i <= num; i++){
        result *= i;
    }
    return result
 }

console.log(factorilize(10))

for (i= 0;i < 9; i++){
    console.log(i)
    for(j = 0;j <= 5; j++){
        console.log(j)
    }
    console.log(i * j)
}




// Array function .Map()
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return console.log(number * 10);
});

// Array function .filter()

const words = ['chairr', 'music', 'pillowes', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(shortWords)


const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(n => {
  return n < 250;
})
console.log(smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(w =>{
  return w.length > 7;
})
console.log(longFavoriteWords)


// findIndex()

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;//index of the first to start with 's'
});

console.log(startsWithS)


// array method adding strings and printing accumulator and value 

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(`this is the hole sum ${newSum}`);