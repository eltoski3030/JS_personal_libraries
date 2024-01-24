let say_hi = 'helo world '
console.log(say_hi)

let array1 = ['this', 'and', 'that']
// For each
let forEach = array1 => { 
    return array1.forEach((value) => console.log(value));
}

forEach(array1)


const numbers = [1, 2, 3, 4, 5];

let forEachNumber = numbers => {
    return numbers.forEach((value) => {
        console.log(value)
    })
}

forEachNumber(numbers)

const Fruits = ["apple", "orange", "banana", "grape", "kiwi"];



const students = [
    { first_name: 'Samantha', last_name: 'Jones' },
    { first_name: 'Hector', last_name: 'Gonzales' },
    { first_name: 'Jeremiah', last_name: 'Duncan' },
  ];
  let forMap = students.map((students) => {
    return students.first_name;
})
console.log(forMap)


let big_numbers = [4323,343532,533532,343545,]

let sort_big_numbers = numbers => {
    return numbers.sort();
}
console.log(sort_big_numbers(big_numbers))

const numbers_in_reverse = sort_big_numbers => {
    return sort_big_numbers.reverse();
}
console.log(numbers_in_reverse(big_numbers))

const big_number = numbers_in_reverse => {
    return numbers_in_reverse[0];
}
console.log(big_number(big_numbers))

