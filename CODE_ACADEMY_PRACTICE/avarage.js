

/*function sumArrayReduce(arr) {
    const sum = arr.reduce((total, current) => total + current, 0);
    return sum;
  }
function num_cuantity(numbers){
    return numbers.length;
}

function avarage(sumArrayReduce,num_cuantity) {
    return sumArrayReduce / num_cuantity;
}


let numbers = [20,30,60,40,10]
console.log(avarage(numbers))

*/
          //this 
function sumArrayReduce(arr) {
    const sum = arr.reduce((total, current) => total + current, 0);
    return sum;
  }
  
  function num_cuantity(numbers) {
    return numbers.length;
  }
  
  function average(numbers) {
    const sum = sumArrayReduce(numbers);
    const quantity = num_cuantity(numbers);
    console.log(sum / quantity);
  }
  
  let numbers = [20, 30, 60, 40, 10];

  average(numbers);
console.log(sumArrayReduce(numbers))
  


  /*function average(numbers) {
    // Step 1: Check if the array is empty
    if (numbers.length === 0) {
      return 0; // If the array is empty, return 0 to avoid division by zero
    }
  
    // Step 2: Calculate the sum of all numbers in the array
    let sum = 0; // Start with a sum of 0
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; // Add each number to the sum
    }
  
    // Step 3: Calculate the average
    const averageValue = sum / numbers.length;
  
    // Step 4: Return the calculated average
    return averageValue;
  }
  
  // Example usage:
  const numbersArray = [10, 20, 30, 40, 50];
  const result = average(numbersArray);
  
  console.log(result); // Output: 30 */
  



