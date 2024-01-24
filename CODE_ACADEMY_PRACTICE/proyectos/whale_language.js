let input = "hi ulises"

let vowels = ['a','e','i','o','u']

let resultArray = []

for (let i = 0; i < input.length; i++){
  /*console.log(`the input index is ${i}`)*/
  for(let j = 0; j < vowels.length; j++){
    /*console.log(`the vowel index is ${j}`)*/
    if(input[i] === vowels[j]){
      /*console.log(input[i])*/
      resultArray.push(input[i])
      if(input[i] === 'e'){
  resultArray.push(input[i]);
  if(vowels[j] === 'u'){
  resultArray.push(vowels[j]);
}
}
    }
  }
}

const resultstrings = resultArray.join('').toUpperCase();

console.log(resultstrings)