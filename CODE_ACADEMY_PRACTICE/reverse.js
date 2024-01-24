let string = 'this is going to be in reverse'.toUpperCase();
console.log(string)

let string2 = `here goes to upper ${string}`

console.log(string2)

/* function even_odd(odd_num) {
    if (odd_num % 2 === 0) {
        return console.log(`This number:${odd_num} is even`)
    } else {
        return console.log('your number is odd')
    }
}
*/

let even_odd = odd_num => {
    if (odd_num % 2 ===0) {
        return console.log(`This number:${odd_num} is even`)
    } else {
        return console.log('your number is odd')
    }
}
even_odd(43)


function string_lenght(stringa){
    return console.log(stringa.length)
}
let stringchecker = 'this is a string'
string_lenght(stringchecker)