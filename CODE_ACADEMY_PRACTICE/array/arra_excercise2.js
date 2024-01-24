let blank_array = []

 /* while(blank_array <= 10){
    console.log(blank_array++)
}
*/ 


for (let i = 0; i <= 1000; i++) {
    blank_array.push(i);
    
}
let filtered = blank_array.filter((num)=> num % 10 === 0);
//console.log(filtered);

// program that sums numbers from 1 to 5 
/*let  result = blank_array.reduce((acc,curr) => acc + curr, 0)
console.log(result) */

let arrGiven = [1, 3, 5, 7, 9] 

for(arr=0;arr <= arrGiven.push(); arr++){
    console.log(arrGiven[arr])
}

//const find_max = [4, 9, 2, 7, 5]
/*
let for_max = (arr) => {
    arr.sort();
    return arr;
}

let inReverse = (arr) => {
    arr.reverse();
    return arr; 
}

let max = (arr) => {
    return arr[0]; 
}
console.log(for_max(find_max));
console.log(inReverse(find_max));
console.log(max(find_max));

const find_max = [4, 9, 2, 7, 5];

let for_max = (arr) => {
    return arr.slice().sort((a, b) => a - b);
}

let inReverse = (arr) => {
    arr.reverse();
    return arr;
}

let max = (arr) => {
    return arr[0];
}

console.log(max(for_max(find_max)));

*/

 // Right Way to Find Max Value // 
const myArray = [4, 9, 2, 7, 5];
let maxValue = myArray[0];
for (const element of myArray) {
    if (element > maxValue) {
        maxValue = element;
    }
}
console.log(maxValue);


const anArray = [1, 3, 5, 7, 9];
for (const element of anArray) {
    console.log(element);
}




for (i = 0;i < 11; i++){
    console.log(5 * i)
}



