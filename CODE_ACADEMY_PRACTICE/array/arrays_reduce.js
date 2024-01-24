

//////     find max value:    //////

const array1 = [34,10,30,45,50]

function sortArr(arr){
    return arr.sort();
}

function reverse_return (sortArr){
    let arrSorted = sortArr.reverse();
    return arrSorted.at(0);
}
console.log('FIND THE AVARAGE')
console.log(reverse_return(array1))
//---------

//////      Suma the un array.    ////////
function sum_array(The_array) {
    return The_array.reduce((a, b) =>{
        return a + b
    }, 0);
}
console.log('SUM OF AN ARRAY')
console.log(sum_array(array1))


///         AVARAGE       /////////

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
    console.log('THE AVARAGE')
  }
  
  let numbers = [20, 30, 60, 40, 10];

  average(numbers);
console.log(sumArrayReduce(numbers))

///////     Reverse Array   /////////

console.log('///////     Reverse Array   /////////')
let fruits = ['apple', 'banana', 'orange']

const reversed = fruits =>{
    console.log(fruits.reverse());
}

reversed(fruits)


