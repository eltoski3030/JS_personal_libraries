
let steps = [];  // Declare the array outside the loop

for (let i = 1; i <= 5; i++) {
    steps.push(i)
        for (let j = 1;j < 5; j++){
            steps.push(j)
        }
     // Push the current value of i to the array in each iteration
}

console.log(steps);  // Output: [1, 2, 3, 4, 5]

let adding = 0;

while (adding < 40) {
    console.log(++adding);
}

let ranArr = ["tony", "condo", "sergio", "baja", "carla"];

for (let i = 0; i < ranArr.length; i++) {
    if (ranArr[i].includes("a")) {
        console.log(ranArr[i]);
    }
}

/*/ triangle Pattern 

let triangle = []

for (i = 0;i < 5; i++){
    console.log(triangle.push(" "))
    for (j = 0;j < 6; j ++){
        triangle.push("*")
    }
    return triangle.join(' ');
}
 */



//  sum table
for (let a = 0; a < 10; a++) {
    console.log(a);
    for (let i = 0; i < 10; i++) {
        console.log(i + a);
    }
}
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = [];

// reverse 
for (let i = ranArr.length - 1; i >= 0; i--) {
    reversedArray.push(ranArr[i]);
}

console.log(reversedArray);


// factorial
function factorial(num){
    result = 1
    for (let i=1; i <= num; i++){
         result = result * i;
    }
    return result;
}
console.log(factorial(5));

function multiplicacion(tabla, multi) {
    for (let i = 1; i <= multi; i++) {
        resultado = tabla * i;  // Use the loop variable 'i' for multiplication
        console.log(resultado);
    }
}

multiplicacion(10, 5);





function max(arr) {
    let max_arr = arr[0];  // Assume the first element is the maximum

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max_arr) {
            max_arr = arr[i];  // Update max_arr if a larger element is found
        }
    }

    return max_arr;
}

// Example usage with an array

console.log(max(originalArray));



// calidrome 
const cali = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('');
    }
    return arr

}

let caliWords = ['alo', 'ola', 'nop', 'sip'];
let reversedWords = cali(caliWords);

console.log(reversedWords);

